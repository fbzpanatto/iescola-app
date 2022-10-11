import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-toolbar',
  templateUrl: './new-toolbar.component.html',
  styleUrls: ['./new-toolbar.component.scss']
})
export class NewToolbarComponent implements OnInit {

  @Input() title: string | undefined
  @Input() phrase: string | undefined

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate([".."], {relativeTo: this.route})
  }
}