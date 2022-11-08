import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { discipline, clasroom } from "../../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import { TeacherService } from "../teacher.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
  styleUrls: ['./form-teacher.component.scss']
})
export class FormTeacherComponent implements OnInit {

  id: string | null = null
  disciplines: discipline[] = []
  classes: clasroom[] = []

  constructor(
    private httpClient: HttpClient,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      .then(() => this.fetchClasses())
      .then(() => this.fetchDisciplines())
  }

  start() {
    return new Promise<void>((resolve) => resolve())
  }

  fetchDisciplines(){
    return new Promise<void>((resolve, reject) => {
      try {
        this.httpClient.get(`${environment.GIGABASE.ODATA_URL}/Escola/Discipline`)
          .subscribe({
            next: (result:any) => {
              this.disciplines = result.value as discipline[]
              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  fetchClasses(){
    return new Promise<void>((resolve, reject) => {
      try {
        this.httpClient.get(`${environment.GIGABASE.ODATA_URL}/Escola/Class`)
          .subscribe({
            next: (result:any) => {
              this.classes = result.value as clasroom[]
              resolve()
            },
            error: (err) => reject(err)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  onSave(){
    console.log('saving...')
  }

  backToList(){
    this.router.navigate(['employee'])
  }

  // errorHandler(statusText: string, errorStatus: number) {
  //   this.dialog.openDialog(statusText, errorStatus)
  //     .afterClosed()
  //     .subscribe(() => this.backToList())
  // }

  // pathFormValues(employment_contract: employment_contract) {
  //   this.employment_contract = employment_contract
  //   this.form.patchValue(this.employment_contract)
  // }
}
