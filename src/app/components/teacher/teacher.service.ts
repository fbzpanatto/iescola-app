import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  _occupation: number = 1

  url = `${environment.GIGABASE.ODATA_URL}/Escola/Teacher`
  urlAll = `?$expand=person($select=name&$expand=employmentContracts($filter=occupationId eq ${this._occupation} and end eq null&$expand=contract,schoolPrincipal))`
  classesAndDisciplines = '?$expand=person,teacherClasses,teacherDisciplines'

  urlPerson = `${environment.GIGABASE.ODATA_URL}/Escola/Person?$expand=teachers`

  constructor(private http: HttpClient) { }

  getAllActiveTeachers() {
    return this.http.get(`${this.url}${this.urlAll}`)
  }

  getTeacherById(id:string) {
    return this.http.get(`${this.url}(${id})${this.classesAndDisciplines}`)
  }

  getTeacherListWithoutClassesAndDisciplines(){
    return this.http.get(`${this.urlPerson}`)
  }

  create(body: any) {
    return this.http.post(this.url, body)
  }

  update(id: string, body: any ) {
    return this.http.put(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}
