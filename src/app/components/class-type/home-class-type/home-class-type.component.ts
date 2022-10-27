import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { class_type } from "../../../shared/utils/types";
import { ClassTypeService } from "../class-type.service";


@Component({
  selector: 'app-home-class-type',
  templateUrl: './home-class-type.component.html',
  styleUrls: ['./home-class-type.component.scss']
})
export class HomeClassTypeComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true
  class_types: class_type[] = []

  constructor(private titleService: Title, private class_typeService: ClassTypeService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(() => {
        this.class_typeService.getAll()
          .subscribe(class_type => this.class_types = class_type)
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
