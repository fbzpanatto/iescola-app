import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { teacher } from "../../shared/utils/types";

type bodyPOST = {
  person: {id: number | null | undefined},
  teacherDisciplines: {disciplineId: number}[],
  teacherClasses: {classId: number}[]}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url = `${environment.GIGABASE.ODATA_URL}/Escola/Person`
  urlEmploymentContract = `${environment.GIGABASE.ODATA_URL}/Escola/EmploymentContract`
  activeTeachers = `?$select=id,registration,start,end&$filter=occupationId eq 1 and end eq null&$expand=contract,occupation,person($expand=teachers),schoolPrincipal`
  createUrl = `${environment.GIGABASE.ODATA_URL}/Escola/Teacher`

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.urlEmploymentContract}${this.activeTeachers}`)
  }

  getById(id:string) {
    return this.http.get(`${this.urlEmploymentContract}(${id})?$expand=person($select=name)`)
  }

  create(body: bodyPOST) {
    return this.http.post(this.createUrl, body)
  }

  update( id: string, body: Partial<teacher> ) {
    return this.http.put(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}
