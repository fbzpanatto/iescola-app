import {Component, Input, OnInit } from '@angular/core';
import {ChangeViewService} from "./change-view.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  control: boolean | undefined = true
  @Input() title: string | undefined
  @Input() quantity: string | undefined
  @Input() creationTitle: string | undefined

  constructor() {
  }

  ngOnInit(): void {
    ChangeViewService.grid = true
  }

  changeView(){
    ChangeViewService.grid = !ChangeViewService.grid
    this.next()
  }

  next() {
    this.control = ChangeViewService.grid
    ChangeViewService.subject.next(this.control)
  }
}
