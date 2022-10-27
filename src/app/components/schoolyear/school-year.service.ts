import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { school_year } from "../../shared/utils/types";
import url from "../../shared/utils/url";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchoolYearService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<school_year[]> {
    return this.http.get<school_year[]>(url.school_year)
  }

  getById(id:string): Observable<school_year>{
    return this.http.get<school_year>(`${url.school_year}/${id}`)
  }

  create(body: school_year) {
    return this.http.post<school_year>(url.school_year, body)
  }

  update( id: string, body: school_year ) {
    return this.http.put(`${url.school_year}/${id}`, body)
  }

  delete( id: string) {
    return this.http.delete(`${url.school_year}/${id}`)
  }
}
