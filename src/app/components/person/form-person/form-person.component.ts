import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  id: string | null = null

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.onLoad()
  }

  onLoad(){
    this.route.paramMap.subscribe(params => this.id = params.get('id'))
    return new Promise<void>((resolve) => {
      if(this.id) {
        this.personService.getById(+this.id).subscribe(console.log)
        resolve()
      } else {
        console.log('criando novo registro')
        resolve()
      }
    })
  }

  onSave() {

  }

}
