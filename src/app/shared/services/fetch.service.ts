import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor( private http: HttpClient ) { }

  getAll<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
  }
}
