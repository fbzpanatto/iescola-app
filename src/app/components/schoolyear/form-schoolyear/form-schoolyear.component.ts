import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-schoolyear',
  templateUrl: './form-schoolyear.component.html',
  styleUrls: ['./form-schoolyear.component.scss']
})
export class FormSchoolyearComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    "name": new FormControl<number | null>(null, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(4)]),
    "start": new FormControl<Date | null>(null, [Validators.required]),
    "end": new FormControl<Date | null>(null, [Validators.required])
  })

  ngOnInit(): void {
  }

  onSubmit() {

  }

  askForDelete(){

  }

}
