import { Component, OnInit } from '@angular/core';
import { DialogService } from "../../../shared/components/dialog/dialog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { contract, employment_contract, occupation, person, school } from "src/app/shared/utils/types";
import { EmployeeService } from "../employee.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  id: string | null = null
  employment_contract: employment_contract | undefined
  contracts: contract[] = []
  occupations: occupation[] = []
  persons: person[] = []
  schools: school[] = []
  fakeSelectArr = [{id: 1, name: 'um'}, {id: 2, name: 'dois'}]

  form = new FormGroup({
    "personId": new FormControl<number | null>(null, [Validators.required,]),
    "contractId": new FormControl<number | null>(null, [Validators.required,]),
    "occupationId": new FormControl<number | null>(null, [Validators.required]),
    "schoolPrincipalId": new FormControl<number | null>(null, [Validators.required]),
    "registration": new FormControl<string | null>(null, [Validators.required]),
    "start": new FormControl<string | Date | null>(null, [Validators.required]),
    "end": new FormControl<string | Date | null>(null)
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      .then(() => this.fetchContracts())
      .then(() => this.fetchOccupations())
      .then(() => this.fetchPersons())
      .then(() => this.fetchSchools())
      .then(() => this.onLoad())
      .catch(error => this.errorHandler(error.statusText, error.status))
  }

  start() {
    return new Promise<void>((resolve) => resolve())
  }

  onLoad() {
    this.id? this.employeeService.getById(this.id)
      .subscribe({
        next: (employment_contract:any) => this.pathFormValues(employment_contract),
        error: (err) => this.errorHandler(err.statusText, err.status)
      }) : null
  }

  fetchContracts(){
    return new Promise<void>((resolve, reject) => {
      try {
        this.httpClient.get(`${environment.GIGABASE.ODATA_URL}/Escola/Contract`)
          .subscribe({
            next: (result:any) => {
              this.contracts = result.value as contract[]
              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  fetchOccupations(){
    return new Promise<void>((resolve, reject) => {
      try {
        this.httpClient.get(`${environment.GIGABASE.ODATA_URL}/Escola/Occupation`)
          .subscribe({
            next: (result:any) => {
              this.occupations = result.value as occupation[]
              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  fetchPersons(){
    return new Promise<void>((resolve, reject) => {
      try {
        this.httpClient.get(`${environment.GIGABASE.ODATA_URL}/Escola/Person`)
          .subscribe({
            next: (result:any) => {
              this.persons = result.value as person[]
              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  fetchSchools(){
    return new Promise<void>((resolve, reject) => {
      try {
        this.httpClient.get(`${environment.GIGABASE.ODATA_URL}/Escola/School`)
          .subscribe({
            next: (result:any) => {
              this.schools = result.value as school[]
              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
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
    this.dialog.openDialog(
      `Deseja excluir o contrato ${this.employment_contract?.id} de ${this.employment_contract?.personId}?`, 1)
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
