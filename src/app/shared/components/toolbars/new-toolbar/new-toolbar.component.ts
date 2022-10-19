import {Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-toolbar',
  templateUrl: './new-toolbar.component.html',
  styleUrls: ['./new-toolbar.component.scss']
})
export class NewToolbarComponent implements OnInit {

  @Input() title: string | undefined
  @Input() phrase: string | undefined
  @Input() backLevels: number | undefined
  @Input() editButton: boolean = false

  private id: string | undefined
  private readonly detail: string = 'detail'

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('id')!)
  }

  toEdit() {
    this.router.navigate([`../`, this.detail], {relativeTo: this.route})
  }

  back(backLevels: number = 1) {
    const back = '../'.repeat(backLevels)
    this.router.navigate([back], {relativeTo: this.route})
  }
}
