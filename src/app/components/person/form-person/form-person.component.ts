import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService } from "../person.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "../../../shared/components/dialog/dialog.service";
import { FetchService } from "../../../shared/services/fetch.service";
import { category, gender, person} from "../../../shared/utils/types";
import url from "../../../shared/utils/url";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  id: string | null = null
  person: person | undefined
  category: category[] = []
  gender: gender[] = []

  form = new FormGroup({
    "name": new FormControl<string | null>(null, Validators.required),
    "cpf": new FormControl<string | null>(null),
    "rg": new FormControl<string | null>(null),
    "person_category_id": new FormControl<number | null>(null, Validators.required),
    "gender_id": new FormControl<number | null>(null, Validators.required),
    "phone": new FormGroup({
      "phone1": new FormControl<number | undefined>(undefined),
      "phone2": new FormControl<number | undefined>(undefined)
    })
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService,
    private fetchService: FetchService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      .then(() => this.fetchPersonCategory())
      .then(() => this.fetchPersonGender())
      .then(() => this.onLoad())
  }

  start(): Promise<boolean> {
    return new Promise<boolean>((resolve) => resolve(true))
  }

  fetchPersonCategory(){
    this.fetchService.getAll(url.category)
      .subscribe({
        next: (category) => this.category = category as category[],
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  fetchPersonGender(){
    this.fetchService.getAll(url.gender)
      .subscribe({
        next: (gender) => this.gender = gender as gender[],
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onLoad() {
    this.id? this.personService.getById(this.id)
      .subscribe({
        next: (person) => this.pathFormValues(person),
        error: (err) => this.errorHandler(err.statusText, err.status)
      }) : null
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

  body(): person {
    return {
      name: this.form.value.name!,
      cpf: this.form.value.cpf!,
      rg: this.form.value.rg!,
      person_category_id: this.form.value.person_category_id!,
      gender_id: this.form.value.gender_id!,
      phone: {
        phone1: this.form.value.phone?.phone1!,
        phone2: this.form.value.phone?.phone2!,
      }
    }
  }
}
