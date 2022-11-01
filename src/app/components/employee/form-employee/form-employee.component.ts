import { Component, OnInit } from '@angular/core';
import {DialogService} from "../../../shared/components/dialog/dialog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../person/person.service";
import {FetchService} from "../../../shared/services/fetch.service";
import {contract, person} from "../../../shared/utils/types";

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  id: string | null = null
  person: person | undefined
  contract: contract[] = []

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService,
    private fetchService: FetchService
  ) { }

  //TODO: implementar a lógica para criação de um novo 'empregado'

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      // .then(() => this.fetchPersonCategory())
      // .then(() => this.fetchPersonGender())
      .then(() => this.onLoad())
  }

  start(): Promise<boolean> {
    return new Promise<boolean>((resolve) => resolve(true))
  }

  onSave() {

  }

  onLoad(){

  }

}
