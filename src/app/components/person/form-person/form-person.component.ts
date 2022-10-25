import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService } from "../person.service";
import { person } from "../person";
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  id: string | null = null

  form = new FormGroup({
    "name": new FormControl<string | null>(null, Validators.required),
    "cpf": new FormControl<string | null>(null, Validators.required),
    "rg": new FormControl<string | null>(null, Validators.required),
    "person_category_id": new FormControl<number | null>(null, Validators.required),
    "gender_id": new FormControl<number | null>(null, Validators.required)
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.onLoad()
      .then(id => {
        this.personService.getById(id)
          .subscribe({
            next: (person) => this.onEdit(person),
            error: (err) => this.errorHandler(err)
          })
      })
  }

  onLoad() {
    this.id = this.route.snapshot.params['id']
    return new Promise<string>((resolve) => {
      this.id ? resolve(this.id) : this.onNew()
    })
  }

  errorHandler(err: any) {
    const { status, message } = err
    this.router.navigate(['person']).then(() => {
      alert(`${status}-${message}`)
    })
  }

  onEdit(person: person) {
    this.form.patchValue({
      name: person.name,
      cpf: person.cpf,
      rg: person.rg,
      person_category_id: person.person_category_id,
      gender_id: person.gender_id
    })
  }

  onNew() {
    this.form.reset()
  }

  onSubmit(): void {
    if(this.id) {
      this.personService.update(this.id, this.body())
        .subscribe({
          next: (result) => console.log('atualizado com sucesso', result),
          error: (err) => this.errorHandler(err)
        })
    } else {
      this.personService.create(this.body())
        .subscribe({
          next: (result) => console.log('pessoa criada', result),
          error: (err) => this.errorHandler(err)
        })
    }
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
