import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { person } from 'src/app/shared/utils/types'
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = `${environment.GIGABASE.ODATA_URL}/Escola/Person`

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
  }

  getById(id:string) {
    return this.http.get(`${this.url}(${id})`)
  }

  create(body: any) {
    return this.http.post(this.url, body)
  }

  update( id: string, body: person ) {
    return this.http.put(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}
