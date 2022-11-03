import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { year } from "../../../shared/utils/types";
import { YearService } from "../year.service";

@Component({
  selector: 'app-home-schoolyear',
  templateUrl: './home-schoolyear.component.html',
  styleUrls: ['./home-schoolyear.component.scss']
})
export class HomeSchoolyearComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true
  years: year[] = []

  constructor(private titleService: Title, private schoolYearService: YearService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(() => {
        this.schoolYearService.getAll()
          .subscribe((year: any) => {
            this.years = year.value as year[]
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
