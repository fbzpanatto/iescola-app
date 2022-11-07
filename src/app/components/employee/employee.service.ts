import { Injectable } from '@angular/core';
import { employment_contract } from "src/app/shared/utils/types";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = `${environment.GIGABASE.ODATA_URL}/Escola/EmploymentContract`

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}?$expand=contract,occupation,person,schoolPrincipal`)
  }

  getById(id:string) {
    return this.http.get(`${this.url}(${id})?$expand=contract,occupation,person,schoolPrincipal`)
  }

  create(body: Partial<employment_contract>) {
    return this.http.post<employment_contract>(this.url, body)
  }

  update( id: string, body: Partial<employment_contract> ) {
    return this.http.put(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}
