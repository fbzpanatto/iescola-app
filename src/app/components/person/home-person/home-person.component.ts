import { Component, OnInit} from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { PersonService } from "../person.service";
import { person } from "../../../shared/utils/types";

@Component({
  selector: 'app-home-person',
  templateUrl: './home-person.component.html',
  styleUrls: ['./home-person.component.scss']
})
export class HomePersonComponent implements OnInit {

  title: string | undefined
  listView: boolean | undefined = true
  persons: person[] = []

  constructor(private titleService: Title, private personService: PersonService) { }

  ngOnInit(): void {
    this.onLoad()
      .then(() => {
        this.personService.getAll()
          .subscribe(persons => this.persons = persons)
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
