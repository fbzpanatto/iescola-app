import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { discipline, clasroom } from "../../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import { TeacherService } from "../teacher.service";
import { ActivatedRoute, Router } from "@angular/router";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { FormControl } from "@angular/forms";
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
  classes: clasroom[] = []

  allDisciplines: discipline[] = []
  public chipSelectedDisciplines: discipline[] = []
  public filteredDisciplines: Observable<String[]> | undefined;

  private allowFreeTextAddDiscipline = false;

  public disciplineControl = new FormControl();
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('disciplineInput') disciplineInput!: ElementRef<HTMLInputElement>
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  constructor(
    private httpClient: HttpClient,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.filteredDisciplines = this.disciplineControl.valueChanges.pipe(
      startWith(null),
      map(disciplineName => this.filterOnValueChange(disciplineName))
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
              this.classes = result.value as clasroom[]
              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

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
    if (this.matAutocomplete.isOpen) {
      return;
    }

    // Add our engineer
    const value = event.value;
    if ((value || '').trim()) {
      this.selectDisciplineByName(value.trim());
    }

    this.resetInputs();
  }
  public removeDiscipline(discipline: discipline): void {
    const index = this.chipSelectedDisciplines.indexOf(discipline);
    if (index >= 0) {
      this.chipSelectedDisciplines.splice(index, 1);
      this.resetInputs();
    }
  }
  public disciplineSelected(event: MatAutocompleteSelectedEvent): void {
    this.selectDisciplineByName(event.option.value);
    this.resetInputs();
  }
  private resetInputs() {
    // clear input element
    this.disciplineInput.nativeElement.value = '';
    // clear control value and trigger engineerControl.valueChanges event
    this.disciplineControl.setValue(null);
  }
  filterOnValueChange(disciplineName: string | null): String[] {
    let result: String[] = []

    let allDisciplinesLessSelected = this.allDisciplines.filter(discipline => this.chipSelectedDisciplines.indexOf(discipline) < 0)
    if(disciplineName) {
      result = this.filterDiscipline(allDisciplinesLessSelected, disciplineName)
    } else {
      result = allDisciplinesLessSelected.map(discipline => discipline.name)
    }
    return result
  }
  filterDiscipline(disciplineList: discipline[], disciplineName: String): String[] {
    let filteredDisciplineList: discipline[] = [];
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




  onSave(){
    console.log('saving...')
  }

  backToList(){
    this.router.navigate(['employee'])
  }
}
