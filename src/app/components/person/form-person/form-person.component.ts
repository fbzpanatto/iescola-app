import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService } from "../person.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import { person } from "src/app/shared/utils/types";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  id: string | null = null
  person: person | undefined
  // category: category[] = []
  // gender: gender[] = []

  form = new FormGroup({
    "name": new FormControl<string | null>(null, Validators.required),
    "cpf": new FormControl<string | null>(null),
    "rg": new FormControl<string | null>(null),
    // "person_category_id": new FormControl<number | null>(null, Validators.required),
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
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      .then(() => this.onLoad())
  }

  start() {
    return new Promise<void>((resolve) => resolve())
  }

  onLoad() {
    this.id? this.personService.getById(this.id)
      .subscribe({
        next: (person:any) => this.pathFormValues(person),
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
    }
  }
}





