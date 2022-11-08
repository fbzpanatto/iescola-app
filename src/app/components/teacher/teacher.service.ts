import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { teacher } from "../../shared/utils/types";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url = `${environment.GIGABASE.ODATA_URL}/Escola/Person`
  home = '?$expand=employmentContracts($filter=occupationId eq 1  and end eq null&$expand=occupation,schoolPrincipal),teachers'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}${this.home}`)
  }

  getById(id:string) {
    return this.http.get(`${this.url}(${id})`)
  }

  create(body: Partial<teacher>) {
    return this.http.post<teacher>(this.url, body)
  }

  update( id: string, body: Partial<teacher> ) {
    return this.http.put(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}
