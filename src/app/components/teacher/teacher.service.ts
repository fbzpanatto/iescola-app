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

  constructor(private http: HttpClient) { }

  getAllActiveTeachers() {
    return this.http.get(`${this.url}${this.urlAll}`)
  }

  getTeacherById(id:string) {
    return this.http.get(`${this.url}(${id})${this.classesAndDisciplines}`)
  }

  getTeacherListWithoutClassesAndDisciplines(){
  //  TODO: retorne pra mim a lista de todas as pessoas que o vinculo com teachers ainda não existe.
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
