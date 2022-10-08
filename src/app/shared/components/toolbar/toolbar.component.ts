import {Component, Input, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  static subject: Subject<boolean> = new Subject<boolean>()
  static grid: boolean = true
  teste:boolean | undefined
  @Input() title: string | undefined
  @Input() quantity: string | undefined
  @Input() creationTitle: string | undefined

  constructor() {
    this.teste = ToolbarComponent.grid
  }

  ngOnInit(): void {}

  changeView(){
    ToolbarComponent.grid = !ToolbarComponent.grid
    this.teste = ToolbarComponent.grid
    ToolbarComponent.subject.next(this.teste)
  }
}
