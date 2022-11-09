import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { discipline, clasroom } from "../../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import { TeacherService } from "../teacher.service";
import { ActivatedRoute, Router } from "@angular/router";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { FormControl, FormGroup } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatAutocomplete, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";

@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
  styleUrls: ['./form-teacher.component.scss']
})
export class FormTeacherComponent implements OnInit {

  id: string | null = null

  allClasses: clasroom[] = []
  public chipSelectedClasses: clasroom[] = []
  public filteredClasses: Observable<String[]> | undefined;
  private allowFreeTextAddClass = false;
  public classControl = new FormControl();
  @ViewChild('classInput') classInput!: ElementRef<HTMLInputElement>
  @ViewChild('autoClass') matAutocompleteClass!: MatAutocomplete;

  allDisciplines: discipline[] = []
  public chipSelectedDisciplines: discipline[] = []
  public filteredDisciplines: Observable<String[]> | undefined;
  private allowFreeTextAddDiscipline = false;
  public disciplineControl = new FormControl();
  @ViewChild('disciplineInput') disciplineInput!: ElementRef<HTMLInputElement>
  @ViewChild('autoDiscipline') matAutocompleteDiscipline!: MatAutocomplete;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  form = new FormGroup({

  })

  constructor(
    private httpClient: HttpClient,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.filteredDisciplines = this.disciplineControl.valueChanges.pipe(
      startWith(''),
      map(disciplineName => this.filterOnValueChange(disciplineName))
    )
    this.filteredClasses = this.classControl.valueChanges.pipe(
      startWith(''),
      map(classroomName => this.filterOnClassValueChange(classroomName))
    )
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      .then(() => this.fetchClasses())
      .then(() => this.fetchDisciplines())
  }
  start() {
    return new Promise<void>((resolve) => resolve())
  }
  fetchDisciplines(){
    return new Promise<void>((resolve, reject) => {
      try {
        this.httpClient.get(`${environment.GIGABASE.ODATA_URL}/Escola/Discipline`)
          .subscribe({
            next: (result:any) => {
              this.allDisciplines = result.value as discipline[]

              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
  }
  fetchClasses(){
    return new Promise<void>((resolve, reject) => {
      try {
        this.httpClient.get(`${environment.GIGABASE.ODATA_URL}/Escola/Class`)
          .subscribe({
            next: (result:any) => {
              // this.allClasses = result.value as clasroom[]
              this.allClasses = [
                {
                  "id": 1,
                  "name": "1A"
                },{
                  "id": 2,
                  "name": "1B"
                }

              ]
              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
  }
  backToList(){
    this.router.navigate(['employee'])
  }
  onSubmit(){
    //TODO: criar form de envio: chipSelectedDisciplines são as matérias selecionadas
    console.log(this.chipSelectedDisciplines)
    console.log(this.chipSelectedClasses)
  }

  //ClassChips
  public addClass(event: MatChipInputEvent): void {
    if (!this.allowFreeTextAddClass) return
    if (this.matAutocompleteClass.isOpen) return

    const value = event.value;
    if ((value || '').trim()) {
      this.selectClassByName(value.trim());
    }

    this.resetClassInputs();
  }
  public removeClass(classroom: clasroom): void {
    const index = this.chipSelectedClasses.indexOf(classroom);
    if (index >= 0) {
      this.chipSelectedClasses.splice(index, 1);
      this.resetClassInputs();
    }
  }
  public classSelected(event: MatAutocompleteSelectedEvent): void {
    this.selectClassByName(event.option.value);
    this.resetClassInputs();
  }
  private resetClassInputs() {
    // clear input element
    this.classInput.nativeElement.value = '';
    // clear control value and trigger engineerControl.valueChanges event
    this.classControl.setValue(null);
  }
  filterOnClassValueChange(className: string | null): String[] {
    let result: String[]

    let allClassesLessSelected = this.allClasses.filter(classroom => this.chipSelectedClasses.indexOf(classroom) < 0)
    if(className) {
      result = this.filterClass(allClassesLessSelected, className)
    } else {
      result = allClassesLessSelected.map(classroom => classroom.name)
    }
    return result
  }
  filterClass(classList: clasroom[], className: String): String[] {
    let filteredClassList: clasroom[]
    const filterValue = className.toLowerCase();
    let classesMatchingClassName = classList.filter(classroom => classroom.name.toLowerCase().indexOf(filterValue) === 0);
    if (classesMatchingClassName.length || this.allowFreeTextAddClass) {
      //
      // either the engineer name matched some autocomplete options
      // or the name didn't match but we're allowing
      // non-autocomplete engineer names to be entered
      //
      filteredClassList = classesMatchingClassName;
    } else {
      //
      // the engineer name didn't match the autocomplete list
      // and we're only allowing engineers to be selected from the list
      // so we show the whjole list
      //
      filteredClassList = classList;
    }
    //
    // Convert filtered list of engineer objects to list of engineer
    // name strings and return it
    //
    return filteredClassList.map(classroom => classroom.name);
  }
  private selectClassByName(className: string) {
    let foundClass = this.allClasses.filter(classroom => classroom.name == className);
    if (foundClass.length) {
      //
      // We found the engineer name in the allEngineers list
      //
      this.chipSelectedClasses.push(foundClass[0]);
    } else {
      //
      // Create a new engineer, assigning a new higher employeeId
      // This is the use case when allowFreeTextAddEngineer is true
      //
      let highestClassId = Math.max(...this.chipSelectedClasses.map(clasroom => clasroom.id), 0);
      this.chipSelectedClasses.push({ name: className, id: highestClassId + 1 });
    }
  }

  // DisciplineChips
  public addDiscipline(event: MatChipInputEvent): void {
    if (!this.allowFreeTextAddDiscipline) {
      // only allowed to select from the filtered autocomplete list
      console.log('allowFreeTextAddDiscipline is false');
      return;
    }

    //
    // Only add when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    //
    if (this.matAutocompleteDiscipline.isOpen) {
      return;
    }

    // Add our engineer
    const value = event.value;
    if ((value || '').trim()) {
      this.selectDisciplineByName(value.trim());
    }

    this.resetDisciplineInputs();
  }
  public removeDiscipline(discipline: discipline): void {
    const index = this.chipSelectedDisciplines.indexOf(discipline);
    if (index >= 0) {
      this.chipSelectedDisciplines.splice(index, 1);
      this.resetDisciplineInputs();
    }
  }
  public disciplineSelected(event: MatAutocompleteSelectedEvent): void {
    this.selectDisciplineByName(event.option.value);
    this.resetDisciplineInputs();
  }
  private resetDisciplineInputs() {
    // clear input element
    this.disciplineInput.nativeElement.value = '';
    // clear control value and trigger engineerControl.valueChanges event
    this.disciplineControl.setValue(null);
  }
  filterOnValueChange(disciplineName: string | null): String[] {
    let result: String[]

    let allDisciplinesLessSelected = this.allDisciplines.filter(discipline => this.chipSelectedDisciplines.indexOf(discipline) < 0)
    if(disciplineName) {
      result = this.filterDiscipline(allDisciplinesLessSelected, disciplineName)
    } else {
      result = allDisciplinesLessSelected.map(discipline => discipline.name)
    }
    return result
  }
  filterDiscipline(disciplineList: discipline[], disciplineName: String): String[] {
    let filteredDisciplineList: discipline[]
    const filterValue = disciplineName.toLowerCase();
    let disciplinesMatchingDisciplineName = disciplineList.filter(discipline => discipline.name.toLowerCase().indexOf(filterValue) === 0);
    if (disciplinesMatchingDisciplineName.length || this.allowFreeTextAddDiscipline) {
      //
      // either the engineer name matched some autocomplete options
      // or the name didn't match but we're allowing
      // non-autocomplete engineer names to be entered
      //
      filteredDisciplineList = disciplinesMatchingDisciplineName;
    } else {
      //
      // the engineer name didn't match the autocomplete list
      // and we're only allowing engineers to be selected from the list
      // so we show the whjole list
      //
      filteredDisciplineList = disciplineList;
    }
    //
    // Convert filtered list of engineer objects to list of engineer
    // name strings and return it
    //
    return filteredDisciplineList.map(discipline => discipline.name);
  }
  private selectDisciplineByName(disciplineName: string) {
    let foundDiscipline = this.allDisciplines.filter(discipline => discipline.name == disciplineName);
    if (foundDiscipline.length) {
      //
      // We found the engineer name in the allEngineers list
      //
      this.chipSelectedDisciplines.push(foundDiscipline[0]);
    } else {
      //
      // Create a new engineer, assigning a new higher employeeId
      // This is the use case when allowFreeTextAddEngineer is true
      //
      let highestDisciplineId = Math.max(...this.chipSelectedDisciplines.map(discipline => discipline.id), 0);
      this.chipSelectedDisciplines.push({ name: disciplineName, id: highestDisciplineId + 1 });
    }
  }

}
