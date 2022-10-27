import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { person } from '../../shared/utils/types'
import url from '../../shared/utils/url'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient ) { }

  getAll(): Observable<person[]> {
    return this.http.get<person[]>(url.person)
  }

  getById(id:string): Observable<person>{
    return this.http.get<person>(`${url.person}/${id}`)
  }

  create(body: person) {
    return this.http.post<person>(url.person, body)
  }

  update( id: string, body: person ) {
    return this.http.put(`${url.person}/${id}`, body)
  }

  delete( id: string) {
    return this.http.delete(`${url.person}/${id}`)
  }
}
