import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { DisciplineService } from "../discipline.service";
import { discipline } from "../../../shared/utils/types";

@Component({
  selector: 'app-home-discipline',
  templateUrl: './home-discipline.component.html',
  styleUrls: ['./home-discipline.component.scss']
})
export class HomeDisciplineComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true
  disciplines: discipline[] = []

  constructor(private titleService: Title, private disciplineService: DisciplineService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(() => {
        this.disciplineService.getAll()
          .subscribe((discipline: any) => {
            this.disciplines = discipline.value as discipline[]
          })
      })
  }

  onLoad() {
    return new Promise<void>((resolve) => {
      this.title = this.titleService.getTitle().split('-')[1]
      HomeToolbarService.subject.subscribe(v => this.listView = v)
      resolve()
    })
  }
}
