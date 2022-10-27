import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { class_type } from "../../shared/utils/types";
import { HttpClient } from "@angular/common/http";
import url from "../../shared/utils/url";

@Injectable({
  providedIn: 'root'
})
export class ClassTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<class_type[]> {
    return this.http.get<class_type[]>(url.class_type)
  }

  getById(id:string): Observable<class_type>{
    return this.http.get<class_type>(`${url.class_type}/${id}`)
  }

  create(body: class_type) {
    return this.http.post<class_type>(url.class_type, body)
  }

  update( id: string, body: class_type ) {
    return this.http.put(`${url.class_type}/${id}`, body)
  }

  delete( id: string) {
    return this.http.delete(`${url.class_type}/${id}`)
  }
}

