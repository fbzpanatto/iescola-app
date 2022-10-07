import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  grid: boolean = true
  @Input() title: string | undefined
  @Input() quantity: string | undefined
  @Input() creationTitle: string | undefined
  @Output() viewController: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {}

  changeView() {
    this.grid = !this.grid
    this.viewController.emit(this.grid)
  }

}
