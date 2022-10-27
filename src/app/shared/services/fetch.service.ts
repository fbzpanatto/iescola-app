import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor( private http: HttpClient ) { }

  getAll(url: string) {
    return this.http.get(url)
  }
}
