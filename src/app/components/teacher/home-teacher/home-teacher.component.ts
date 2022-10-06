import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-teacher',
  templateUrl: 'home-teacher.component.html',
  styleUrls: ['home-teacher.component.scss']
})
export class HomeTeacherComponent implements OnInit {

  title: string | undefined

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle().split('-')[1]
  }

  onEdit(){
    console.log('edit...')
  }
}
