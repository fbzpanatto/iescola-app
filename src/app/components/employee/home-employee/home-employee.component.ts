import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { EmployeeService } from "../employee.service";
import { employment_contract } from "../../../shared/utils/types";

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.scss']
})
export class HomeEmployeeComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true
  employees: employment_contract[] = []

  constructor(private titleService: Title, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(() => this.fetchAll())
  }

  onLoad() {
    return new Promise<void>((resolve) => {
      this.title = this.titleService.getTitle().split('-')[1]
      HomeToolbarService.subject.subscribe(v => this.listView = v)
      resolve()
    })
  }

  fetchAll(){
    this.employeeService.getAll()
      .subscribe((result:any) => this.employees = result.value as employment_contract[])
  }
}
