import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { TeacherService } from "../teacher.service";

@Component({
  selector: 'app-teacher',
  templateUrl: 'home-teacher.component.html',
  styleUrls: ['home-teacher.component.scss']
})
export class HomeTeacherComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true
  //TODO: definir melhor a tipagem para teachers
  allActiveTeachers: any[] = []

  constructor(private titleService: Title, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(() => this.fetchAll())
  }

  onLoad() {
    return new Promise<void>((resolve) => {
      this.title = this.titleService.getTitle().split('-')[1]
      HomeToolbarService.subject.subscribe(v => this.listView = v)
      resolve()
    })
  }

  fetchAll(){
    this.teacherService.getAllActiveTeachers()
      //todo: criar um map para melhorar o retorno, e não setar [0] no html
      .subscribe((result:any) => {
        this.allActiveTeachers = result.value
      })
  }
}
