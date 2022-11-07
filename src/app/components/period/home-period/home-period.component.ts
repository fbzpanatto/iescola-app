import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { period } from "../../../shared/utils/types";
import { PeriodService } from "src/app/components/period/period.service";

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
    this.periodService.getAll()
      .subscribe((result:any) => this.periods = result.value as period[])
  }
}
