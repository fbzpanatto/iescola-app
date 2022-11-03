import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { classType } from "../../../shared/utils/types";
import { ClassTypeService } from "../class-type.service";


@Component({
  selector: 'app-home-class-type',
  templateUrl: './home-class-type.component.html',
  styleUrls: ['./home-class-type.component.scss']
})
export class HomeClassTypeComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true
  classTypes: classType[] = []

  constructor(private titleService: Title, private classTypeService: ClassTypeService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(() => {
        this.classTypeService.getAll()
          .subscribe((classType: any) => {
            this.classTypes = classType.value as classType[]
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
