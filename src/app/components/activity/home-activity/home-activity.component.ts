import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ChangeViewService} from "../../../shared/components/toolbar/change-view.service";

@Component({
  selector: 'app-home-activity',
  templateUrl: './home-activity.component.html',
  styleUrls: ['./home-activity.component.scss']
})
export class HomeActivityComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle().split('-')[1]
    ChangeViewService.subject.subscribe(v => this.listView = v)
  }
}
