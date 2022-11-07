import { Component, OnInit } from '@angular/core';
import { DialogService } from "../../../shared/components/dialog/dialog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { contract, employment_contract, occupation } from "src/app/shared/utils/types";
import { EmployeeService } from "../employee.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  id: string | null = null
  employment_contract: employment_contract | undefined
  contract: contract[] = []
  occupation: occupation[] = []

  form = new FormGroup({
    "personId": new FormControl<number | null>(null, [Validators.required,]),
    "contractId": new FormControl<number | null>(null, [Validators.required,]),
    "occupationId": new FormControl<number | null>(null, [Validators.required]),
    "schoolPrincipalId": new FormControl<number | null>(null, [Validators.required]),
    "registration": new FormControl<string | null>(null, [Validators.required]),
    "start": new FormControl<string | Date | null>(null, [Validators.required]),
    "end": new FormControl<string | Date | null>(null, [Validators.required])
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      // .then(async () => await this.fetchYears())
      .then(async () => await this.onLoad())
  }

  start(): Promise<boolean> {
    return new Promise<boolean>((resolve) => resolve(true))
  }

  async onLoad() {
    this.id? this.employeeService.getById(this.id)
      .subscribe({
        next: (employment_contract:any) => this.pathFormValues(employment_contract),
        error: (err) => this.errorHandler(err.statusText, err.status)
      }) : null
  }

  // async fetchYears(){
  //   this.yearService.getAll()
  //     .subscribe({
  //       next: (result:any) => this.years = result.value as year[],
  //       error: (err) => this.errorHandler(err.statusText, err.status)
  //     })
  // }

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
    this.dialog.openDialog(`Deseja excluir o contrato ${this.employment_contract?.id} de ${this.employment_contract?.personId}?`, 1)
      .afterClosed()
      .subscribe(result => result ? this.onDelete() : null)
  }

  backToList(){
    this.router.navigate(['period'])
  }

  errorHandler(statusText: string, errorStatus: number) {
    this.dialog.openDialog(statusText, errorStatus)
      .afterClosed()
      .subscribe(() => this.backToList())
  }

  pathFormValues(employment_contract: employment_contract) {
    this.employment_contract = employment_contract
    this.form.patchValue(this.employment_contract)
  }

  body(): Partial<employment_contract> {
    const val = this.form.value
    return {
      "personId": val.personId!,
      "contractId": val.contractId!,
      "occupationId": val.occupationId!,
      "schoolPrincipalId": val.schoolPrincipalId!,
      "registration": val.registration!,
      "start": val.start!,
      "end": val.end!
    }
  }
}
