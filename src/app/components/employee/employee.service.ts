import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { employee } from "../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import url from "../../shared/utils/url";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<employee[]> {
    return this.http.get<employee[]>(url.employee)
  }

  getById(id:string, fragment?:string): Observable<employee>{
    return this.http.get<employee>(`${url.employee}/${id}/${fragment}`)
  }

  create(body: employee) {
    return this.http.post<employee>(url.employee, body)
  }

  update( id: string, body: employee ) {
    return this.http.put(`${url.employee}/${id}`, body)
  }

  delete( id: string) {
    return this.http.delete(`${url.employee}/${id}`)
  }
}
