import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PersonService } from "../person.service";
import { person } from "../person";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.getById(+this.route.snapshot.params['id'])
  }

  getById(id: number):void {
    this.personService.getById(id)
      .then((result: person | string) => {
        result === 'new'?
            this.onNew() :
            this.onEdit(result as person)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  onEdit(person: person) {
    console.log('editando', person)
  }

  onNew() {
    console.log('criando novo')
  }

  onSave() {}
}
