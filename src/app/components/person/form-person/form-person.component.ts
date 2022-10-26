import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService } from "../person.service";
import { person } from "../person";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { DialogService } from "../../../shared/components/dialog/dialog.service";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  id: string | null = null
  person: person | undefined

  form = new FormGroup({
    "name": new FormControl<string | null>(null, Validators.required),
    "cpf": new FormControl<string | null>(null),
    "rg": new FormControl<string | null>(null),
    "person_category_id": new FormControl<number | null>(null, Validators.required),
    "gender_id": new FormControl<number | null>(null, Validators.required),
    "phone1": new FormControl<number | null>(null),
    "phone2": new FormControl<number | null>(null)
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService,
  ) {}

  ngOnInit(): void {
    this.onLoad()
      .then(id => {
        this.personService.getById(id)
          .subscribe({
            next: (person) => this.pathFormValues(person),
            error: (err) => this.errorHandler(err.statusText, err.status)
          })
      })
  }

  onLoad() {
    this.id = this.route.snapshot.params['id']
    return new Promise<string>((resolve) => {
      this.id ? resolve(this.id) : this.form.reset()
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
    this.form.patchValue({
      name: person.name,
      cpf: person.cpf,
      rg: person.rg,
      person_category_id: person.person_category_id,
      gender_id: person.gender_id
    })
  }

  body(): person {
    return {
      name: this.form.value.name!,
      cpf: this.form.value.cpf!,
      rg: this.form.value.rg!,
      person_category_id: this.form.value.person_category_id!,
      gender_id: this.form.value.gender_id!
    }
  }
}
