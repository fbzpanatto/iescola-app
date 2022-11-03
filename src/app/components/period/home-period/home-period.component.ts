import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { period } from "../../../shared/utils/types";
import { PeriodService } from "../period.service";

@Component({
  selector: 'app-home-period',
  templateUrl: './home-period.component.html',
  styleUrls: ['./home-period.component.scss']
})
export class HomePeriodComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true
  periods: period[] = []

  constructor(private titleService: Title, private periodService: PeriodService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(() => {
        this.periodService.getAll()
          .subscribe((period: any) => {
            this.periods = period.value as period[]
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
