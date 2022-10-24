import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { person } from "./person";
import { Observable } from "rxjs";
import { Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url: string = 'http://localhost:3000/person'

  constructor(private http: HttpClient, private router:Router ) { }

  getAll(): Observable<person[]> {
    return this.http.get<person[]>(this.url)
  }

  getById(id:number): Promise<person | string> {
    return new Promise((resolve, reject) => {
      if(id) {
        this.http.get<person>(`${this.url}/${id}`)
          .subscribe({
            next: (value) => resolve(value),
            error: (err: any) => this.router.navigate(['person'])
          })
      } else {
        this.router.url.split('/').includes('new')?
          resolve('new') :
          this.router.navigate(['person'])
      }
    })
  }
}
