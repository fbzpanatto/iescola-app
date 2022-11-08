import { Injectable } from '@angular/core';
import { discipline } from "../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  url = `${environment.GIGABASE.ODATA_URL}/Escola/Discipline`

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
  }

  getById(id:string) {
    return this.http.get(`${this.url}(${id})`)
  }

  create(body: Partial<discipline>) {
    return this.http.post<discipline>(this.url, body)
  }

  update( id: string, body: Partial<discipline> ) {
    return this.http.put(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}
