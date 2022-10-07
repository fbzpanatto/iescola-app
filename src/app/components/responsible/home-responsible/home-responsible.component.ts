import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home-responsible',
  templateUrl: './home-responsible.component.html',
  styleUrls: ['./home-responsible.component.scss']
})
export class HomeResponsibleComponent implements OnInit {

  title: string | undefined

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle().split('-')[1]
  }

}
