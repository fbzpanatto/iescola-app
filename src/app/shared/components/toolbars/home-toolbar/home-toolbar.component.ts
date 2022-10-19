import {Component, Input, OnInit } from '@angular/core';
import { HomeToolbarService } from "../service/home-toolbar.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.scss']
})
export class HomeToolbarComponent implements OnInit {

  control: boolean | undefined = true
  @Input() title: string | undefined
  @Input() firstPhrase: string | undefined
  @Input() secondPhrase: string | undefined
  @Input() actionNew: boolean = false
  @Input() actionEdit: boolean = false
  @Input() filter: boolean = false
  @Input() changeViewOptions: boolean = false
  @Input() backButton: boolean = false
  @Input() backLevels: number = 1

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    HomeToolbarService.grid = true
  }

  changeView(){
    HomeToolbarService.grid = !HomeToolbarService.grid
    this.next()
  }

  next() {
    this.control = HomeToolbarService.grid
    HomeToolbarService.subject.next(this.control)
  }

  navigateToNew() {
    this.router.navigate(["new"], {relativeTo: this.route})
  }

  goBack(backLevels: number) {
    this.router.navigate(["../".repeat(backLevels)], {relativeTo: this.route})
  }
}

