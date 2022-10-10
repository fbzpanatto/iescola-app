import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ChangeViewService} from "../../../shared/components/toolbar/change-view.service";

@Component({
  selector: 'app-home-responsible',
  templateUrl: './home-responsible.component.html',
  styleUrls: ['./home-responsible.component.scss']
})
export class HomeResponsibleComponent implements OnInit {

  title: string | undefined
  gridView: boolean | undefined = true

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle().split('-')[1]
    ChangeViewService.subject.subscribe(v => this.gridView = v)
  }

}
