import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { year } from "../../shared/utils/types";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class YearService {

  url = `${environment.GIGABASE.ODATA_URL}/Escola/Year`

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
  }

  getById(id:string) {
    return this.http.get(`${this.url}(${id})`)
  }

  create(body: year) {
    return this.http.post<year>(this.url, body)
  }

  update( id: string, body: year ) {
    return this.http.put(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}
