import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { person } from "./person";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url: string = 'http://localhost:3000/person'

  constructor(private http: HttpClient) { }

  getAll(): Observable<person[]> {
    return this.http.get<person[]>(this.url)
  }

  getById(id: number): Observable<person> {
    return this.http.get<person>(`${this.url}/${id}`)
  }

  getByIdTwo(id: number): Promise<person | string>{
    return new Promise((resolve, reject) => {
      this.http.get<person>(`${this.url}/${id}`)
        .subscribe(person => {
          if(!person) reject('Pessoa não encontrada')
          resolve(person)
        })
    })
  }
}
