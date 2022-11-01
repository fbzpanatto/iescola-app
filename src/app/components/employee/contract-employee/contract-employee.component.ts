import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../employee.service";
import { person_contract } from "../../../shared/utils/types";
import { map } from "rxjs";
import url from "../../../shared/utils/url";
import {FetchService} from "../../../shared/services/fetch.service";

@Component({
  selector: 'app-contract-employee',
  templateUrl: './contract-employee.component.html',
  styleUrls: ['./contract-employee.component.scss']
})
export class ContractEmployeeComponent implements OnInit {

  person_contracts: person_contract[] = []

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService, private fetch: FetchService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(employeeId => {
        this.fetch.getAll<person_contract[]>(url.person_contract)
          .pipe(
            map((result:person_contract[]) => result.filter(item => item.person_id === employeeId))
          )
          .subscribe(result => this.person_contracts = result)
      })
  }

  onLoad(){
    return new Promise((resolve) => {
      const employeeId = +this.route.snapshot.params['id']
      resolve(employeeId)
    })
  }
}
