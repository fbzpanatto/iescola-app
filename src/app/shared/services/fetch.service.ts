import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor( private http: HttpClient ) { }

  getAll(url: string):Observable<any> {
    return this.http.get(url)
  }
}
