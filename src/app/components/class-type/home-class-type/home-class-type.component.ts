import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HomeToolbarService} from "../../../shared/components/toolbars/service/home-toolbar.service";

@Component({
  selector: 'app-home-class-type',
  templateUrl: './home-class-type.component.html',
  styleUrls: ['./home-class-type.component.scss']
})
export class HomeClassTypeComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle().split('-')[1]
    HomeToolbarService.subject.subscribe(v => this.listView = v)
  }

}
