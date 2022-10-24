import { Component, OnDestroy, OnInit} from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HomeToolbarService } from "../../../shared/components/toolbars/service/home-toolbar.service";
import { PersonService } from "../person.service";
import { person } from "../person";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home-person',
  templateUrl: './home-person.component.html',
  styleUrls: ['./home-person.component.scss']
})
export class HomePersonComponent implements OnInit, OnDestroy {

  title: string | undefined
  listView: boolean | undefined = true
  persons: person[] = []
  subscription: Subscription = new Subscription()

  constructor(private titleService: Title, private personService: PersonService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.onLoad()
      .then(() => {
        this.subscription =
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

  onEdit(){
    console.log('edit...')
  }
}
