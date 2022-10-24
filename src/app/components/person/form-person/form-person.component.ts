import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { PersonService } from "../person.service";
import { person } from "../person";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  id: string | null = null
  person: person | null = null

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService) {}

  ngOnInit(): void {
    this.onLoad()
      .then(id => {
        this.personService.getById(id)
          .subscribe({
            next: (person) => {
              console.log(person)
            },
            error: (err) => this.errorHandler(err)
          })
      })
  }

  onLoad() {
    this.id = this.route.snapshot.params['id']
    return new Promise<string>((resolve) => {
      if(this.id) resolve(this.id)
    })
  }

  errorHandler(err: any) {
    const { status, message } = err
    alert(`${status}-${message}`)
    this.router.navigate(['person'])
  }

  onEdit(person: person) {
    console.log('editando', person)
  }

  onNew() {
    console.log('criando novo')
  }

  onSave() {}
}
