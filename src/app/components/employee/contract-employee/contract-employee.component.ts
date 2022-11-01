import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../employee.service";
import { person_contract } from "../../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Component({
  selector: 'app-contract-employee',
  templateUrl: './contract-employee.component.html',
  styleUrls: ['./contract-employee.component.scss']
})
export class ContractEmployeeComponent implements OnInit {

  person_contracts: person_contract[] = []

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService, private http: HttpClient) { }

  //TODO: refactor
  ngOnInit(): void {
    const employeeId = +this.route.snapshot.params['id']
    this.http.get<person_contract[]>('http://localhost:3000/person_contract')
      .pipe(
        map((result:person_contract[]) => result.filter(item => item.person_id === employeeId))
      )
      .subscribe(result => this.person_contracts = result)
  }
}
