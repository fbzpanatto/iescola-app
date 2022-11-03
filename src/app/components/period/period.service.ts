import { Injectable } from '@angular/core';
import { period } from "../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  url = `${environment.GIGABASE.ODATA_URL}/Escola/Period`

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
  }

  getById(id:string) {
    return this.http.get(`${this.url}(${id})`)
  }

  create(body: period) {
    return this.http.post<period>(this.url, body)
  }

  update( id: string, body: period ) {
    return this.http.put(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}

