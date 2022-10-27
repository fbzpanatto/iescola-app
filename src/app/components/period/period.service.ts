import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { period } from "../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import url from "../../shared/utils/url";

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<period[]> {
    return this.http.get<period[]>(url.period)
  }

  getById(id:string): Observable<period>{
    return this.http.get<period>(`${url.period}/${id}`)
  }

  create(body: period) {
    return this.http.post<period>(url.period, body)
  }

  update( id: string, body: period ) {
    return this.http.put(`${url.period}/${id}`, body)
  }

  delete( id: string) {
    return this.http.delete(`${url.period}/${id}`)
  }
}

