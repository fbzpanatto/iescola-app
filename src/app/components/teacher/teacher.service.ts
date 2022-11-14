import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

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

  teacherDisciplinesAndClasses = '?$select=personId,registration&$expand=person($expand=teachers($expand=teacherClasses,teacherDisciplines))'

  postAndPutUrl = `${environment.GIGABASE.ODATA_URL}/Escola/Teacher`

  constructor(private http: HttpClient) { }

  getAllContracts() {
    return this.http.get(`${this.urlEmploymentContract}${this.activeTeachers}`)
  }

  getContractById(id:string) {
    return this.http.get(`${this.urlEmploymentContract}(${id})${this.teacherDisciplinesAndClasses}`)
  }

  create(body: bodyPOST) {
    return this.http.post(this.postAndPutUrl, body)
  }

  updateClassAndDisciplines(id: number, body: bodyPOST ) {
    return this.http.put(`${this.postAndPutUrl}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}
