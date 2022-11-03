import { Injectable } from '@angular/core';
import { classType } from "../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClassTypeService {

  url = `${environment.GIGABASE.ODATA_URL}/Escola/ClassType`

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
  }

  getById(id:string) {
    return this.http.get(`${this.url}(${id})`)
  }

  create(body: classType) {
    return this.http.post<classType>(this.url, body)
  }

  update( id: string, body: classType ) {
    return this.http.put(`${this.url}(${id})`, body)
  }

  delete( id: string) {
    return this.http.delete(`${this.url}(${id})`)
  }
}

