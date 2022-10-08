import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ToolbarComponent} from "../../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-home-class',
  templateUrl: './home-class.component.html',
  styleUrls: ['./home-class.component.scss']
})
export class HomeClassComponent implements OnInit {

  title: string | undefined
  grid: boolean | undefined = true

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle().split('-')[1]
    ToolbarComponent.subject.subscribe(v => this.grid = v)
  }
}
