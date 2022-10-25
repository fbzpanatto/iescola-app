import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService } from "../person.service";
import { person } from "../person";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  id: string | null = null
  person: person | null = null

  form = this.fb.group({
    "name": ["", Validators.required],
    "cpf": [""],
    "rg": [""],
    "person_category_id": ["", Validators.required],
    "gender_id": ["", Validators.required]
  })

  constructor(
    private fb: FormBuilder,
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
    this.person = person
    console.log('editando', this.person)
    //  TODO: popular o formulário com os respectivos dados da pessoa encontrada
  }

  onNew() {
    console.log('criando novo')
    this.form.reset()
    //  TODO: resetar o formulário para uma nova insercação de pessoa
  }

  onSubmit() {
    console.log('enviando form...')
    console.log(this.form.value)
    this.personService.create(this.body())
      .subscribe({
        next: (result) => console.log('pessoa criada', result),
        error: (err) => this.errorHandler(err)
      })
  }

  body(): person {
    return {
      name: this.form.value.name!,
      cpf: this.form.value.cpf!,
      rg: this.form.value.rg!,
      person_category_id: +this.form.value.person_category_id!,
      gender_id: +this.form.value.gender_id!
    }
  }

  onSave() {}
}
