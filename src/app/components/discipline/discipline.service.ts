import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { discipline } from "../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import url from "../../shared/utils/url";

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<discipline[]> {
    return this.http.get<discipline[]>(url.discipline)
  }

  getById(id:string): Observable<discipline>{
    return this.http.get<discipline>(`${url.discipline}/${id}`)
  }

  create(body: discipline) {
    return this.http.post<discipline>(url.discipline, body)
  }

  update( id: string, body: discipline ) {
    return this.http.put(`${url.discipline}/${id}`, body)
  }

  delete( id: string) {
    return this.http.delete(`${url.discipline}/${id}`)
  }
}

