import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChangeViewService {

  static subject: Subject<boolean> = new Subject<boolean>()
  private static _grid: boolean = true

  constructor() { }

  public static get grid () {
    return this._grid
  }

  static set grid(value) {
    this._grid = value
  }
}
