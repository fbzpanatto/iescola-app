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

  private id: string | undefined
  private readonly detail: string = 'detail'
  private readonly backString: string = '../'

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('id')!)
  }

  goBack(backLevels: number = 1) {
    this.router.navigate([this.backString.repeat(backLevels)], {relativeTo: this.route})
  }
}
