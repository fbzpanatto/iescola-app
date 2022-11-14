import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url = `${environment.GIGABASE.ODATA_URL}/Escola/Teacher`

  activeTeachers = '?$expand=person($expand=employmentContracts($filter=occupationId eq 1 and end eq null&$expand=contract,schoolPrincipal))'

  classesAndDisciplines = '?$expand=person,teacherClasses,teacherDisciplines'

  constructor(private http: HttpClient) { }

  getAllActiveTeachers() {
    return this.http.get(`${this.url}${this.activeTeachers}`)
  }

  getTeacherById(id:string) {
    return this.http.get(`${this.url}(${id})${this.classesAndDisciplines}`)
  }

  create(body: any) {
    return this.http.post(this.url, body)
  }

  updateClassAndDisciplines(id: number, body: any ) {
    return this.http.post(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}
