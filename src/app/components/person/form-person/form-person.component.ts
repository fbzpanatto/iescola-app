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

  id: string | null = null
  person: person | null = null

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(() => console.log('this.person', this.person))
  }

  onLoad(){
    this.route.paramMap.subscribe(params => this.id = params.get('id'))
    return new Promise<void>((resolve) => {
      if(this.id) {
        this.personService.getById(+this.id)
          .subscribe(person => {
          this.person = person
          resolve()
        })
      } else {
        console.log('criando novo registro')
        resolve()
      }
    })
  }

  onSave() {
  }

}
