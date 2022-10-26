import {Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

interface DialogData {
  status: number;
  message: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

  readonly type = {
    "delete":  {
      "status": 1,
      "message": this.data.message
    },
    "default": {
      "status": this.data.status,
      "message": this.data.message
    }
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {

  }
}
