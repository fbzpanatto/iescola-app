import { Component, OnInit } from '@angular/core';
import { DialogService } from "../../../shared/components/dialog/dialog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { contract, employee } from "../../../shared/utils/types";
import { EmployeeService } from "../employee.service";
import url from "../../../shared/utils/url";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FetchService } from "../../../shared/services/fetch.service";

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  id: string | undefined = undefined
  employee: employee | undefined
  contract: contract[] = []

  form = new FormGroup({
    "person_id": new FormControl<number | null>(null, Validators.required),
    "registration": new FormControl<string | null>(null, Validators.required),
    "active": new FormControl<boolean | null>(null, Validators.required),
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fetchService: FetchService
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      .then(() => this.fetchContractType())
      .then(() => this.onLoad())
  }

  start(): Promise<boolean> {
    return new Promise<boolean>((resolve) => resolve(true))
  }

  fetchContractType(){
    this.fetchService.getAll(url.contract)
      .subscribe({
        next: (contract) => this.contract = contract as contract[],
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onLoad() {
    console.log('onLoad', this.id)
    this.id? this.employeeService.getById(this.id)
      .subscribe({
        next: (employee) => this.pathFormValues(employee),
        error: (err) => this.errorHandler(err.statusText, err.status)
      }) : null
  }

  onSubmit(): void {
    this.id ? this.onEdit() : this.onNew()
  }

  onEdit(): void {
    this.employeeService.update(this.id!, this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onNew(): void {
    this.employeeService.create(this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onDelete() {
    this.employeeService.delete(this.id!)
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.statusText)
      })
  }

  askForDelete() {
    this.dialog.openDialog(`Deseja excluir ${this.employee?.person_id}?`, 1)
      .afterClosed()
      .subscribe(result => result ? this.onDelete() : null)
  }

  backToList(){
    this.router.navigate(['employee'])
  }

  errorHandler(statusText: string, errorStatus: number) {
    this.dialog.openDialog(statusText, errorStatus)
      .afterClosed()
      .subscribe(() => this.backToList())
  }

  pathFormValues(employee: employee) {
    this.employee = employee
    this.form.patchValue(this.employee)
  }

  body(): employee {
    return {
      person_id: +this.form.value.person_id!,
      registration: this.form.value.registration!,
      active: this.form.value.active!
    }
  }
}
