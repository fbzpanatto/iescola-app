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
  @Input() quantity: string | undefined
  @Input() creationTitle: string | undefined

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
}

