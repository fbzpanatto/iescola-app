import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { person } from "./person";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url: string = 'http://localhost:3000/person'

  constructor(private http: HttpClient ) { }

  getAll(): Observable<person[]> {
    return this.http.get<person[]>(this.url)
  }

  getById(id:string): Observable<person>{
    return this.http.get<person>(`${this.url}/${id}`)
  }
}
