import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService } from "../person.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import { person, category, discipline } from "src/app/shared/utils/types";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatAutocomplete, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import {map, Observable, startWith} from "rxjs";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  id: string | null = null
  person: person | undefined

  allCategories: category[] = []
  public chipSelectedCategories: category[] = []
  public filteredCategories: Observable<String[]> | undefined;
  private allowFreeTextAddCategory = false;
  public categoryControl = new FormControl();
  @ViewChild('categoryInput') categoryInput!: ElementRef<HTMLInputElement>
  @ViewChild('autoCategory') matAutocompleteDiscipline!: MatAutocomplete;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  form = new FormGroup({
    "name": new FormControl<string | null>(null, Validators.required),
    "cpf": new FormControl<string | null>(null),
    "rg": new FormControl<string | null>(null)
    // "gender_id": new FormControl<number | null>(null, Validators.required),
    // "phone": new FormGroup({
    //   "phone1": new FormControl<number | undefined>(undefined),
    //   "phone2": new FormControl<number | undefined>(undefined)
    // })
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService,
    private httpClient: HttpClient
  ) {
    this.filteredCategories = this.categoryControl.valueChanges.pipe(
      startWith(''),
      map(categoryName => this.filterOnValueChange(categoryName))
    )
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      .then(() => this.fetchCategory())
      .then(() => this.onLoad())
      .catch(error => this.errorHandler(error.statusText, error.status))
  }

  start() {
    return new Promise<void>((resolve) => resolve())
  }

  fetchCategory() {
    return new Promise<void>((resolve, reject) => {
      try {
        this.httpClient.get(`${environment.GIGABASE.ODATA_URL}/Escola/Category`)
          .subscribe({
            next: (result:any)=> {
              this.allCategories = result.value as category[]
              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (err) {
        reject(err)
      }
    })
  }

  onLoad() {
    return new Promise<void>((resolve, reject) => {
      try {
        this.id? this.personService.getById(this.id)
          .subscribe({
            next: (person:any) => {
              this.pathFormValues(person)

              resolve()
            },
            error: (err) => reject(err)
          }) : null
      } catch (err) {
        reject(err)
      }
    })
  }

  onSubmit(): void {
    this.id ? this.onEdit() : this.onNew()
  }

  onEdit(): void {
    this.personService.update(this.id!, this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onNew(): void {
    this.personService.create(this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onDelete() {
    this.personService.delete(this.id!)
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.statusText)
      })
  }

  askForDelete() {
    this.dialog.openDialog(`Deseja excluir ${this.person?.name}?`, 1)
      .afterClosed()
      .subscribe(result => result ? this.onDelete() : null)
  }

  backToList(){
    this.router.navigate(['person'])
  }

  errorHandler(statusText: string, errorStatus: number) {
    this.dialog.openDialog(statusText, errorStatus)
      .afterClosed()
      .subscribe(() => this.backToList())
  }

  pathFormValues(person: person) {
    this.person = person
    this.form.patchValue(this.person)
  }

  body() {

    const personCategories: {
      "category": {
        "id": number
      }
    }[] = []

    for (let category of this.chipSelectedCategories) {
      personCategories.push({category: {id: category.id}})
    }

    return {
      name: this.form.value.name!,
      cpf: this.form.value.cpf!,
      rg: this.form.value.rg!,
      personCategories
    }
  }

  // CategoryChips
  public addCategory(event: MatChipInputEvent): void {
    if (!this.allowFreeTextAddCategory) {
      // only allowed to select from the filtered autocomplete list
      console.log('allowFreeTextAddCategory is false');
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
      this.selectCategoryByName(value.trim());
    }

    this.resetCategoryInputs();
  }
  public removeCategory(category: category): void {
    const index = this.chipSelectedCategories.indexOf(category);
    if (index >= 0) {
      this.chipSelectedCategories.splice(index, 1);
      this.resetCategoryInputs();
    }
  }
  public categorySelected(event: MatAutocompleteSelectedEvent): void {
    this.selectCategoryByName(event.option.value);
    this.resetCategoryInputs();
  }
  private resetCategoryInputs() {
    // clear input element
    this.categoryInput.nativeElement.value = '';
    // clear control value and trigger engineerControl.valueChanges event
    this.categoryControl.setValue(null);
  }
  filterOnValueChange(categoryName: string | null): String[] {
    let result: String[]

    let allCategoriesLessSelected = this.allCategories.filter(category => this.chipSelectedCategories.indexOf(category) < 0)
    if(categoryName) {
      result = this.filterCategory(allCategoriesLessSelected, categoryName)
    } else {
      result = allCategoriesLessSelected.map(category => category.name)
    }
    return result
  }
  filterCategory(categoryList: category[], categoryName: String): String[] {
    let filteredDisciplineList: discipline[]
    const filterValue = categoryName.toLowerCase();
    let disciplinesMatchingDisciplineName = categoryList.filter(discipline => discipline.name.toLowerCase().indexOf(filterValue) === 0);
    if (disciplinesMatchingDisciplineName.length || this.allowFreeTextAddCategory) {
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
      filteredDisciplineList = categoryList;
    }
    //
    // Convert filtered list of engineer objects to list of engineer
    // name strings and return it
    //
    return filteredDisciplineList.map(discipline => discipline.name);
  }
  private selectCategoryByName(categoryName: string) {
    let foundCategory = this.allCategories.filter(category => category.name == categoryName);
    if (foundCategory.length) {
      //
      // We found the engineer name in the allEngineers list
      //
      this.chipSelectedCategories.push(foundCategory[0]);
    } else {
      //
      // Create a new engineer, assigning a new higher employeeId
      // This is the use case when allowFreeTextAddEngineer is true
      //
      let highestCategoryId = Math.max(...this.chipSelectedCategories.map(category => category.id), 0);
      this.chipSelectedCategories.push({ name: categoryName, id: highestCategoryId + 1 });
    }
  }
}





