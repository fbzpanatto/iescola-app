import {Component, Inject } from '@angular/core';
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
export class DialogComponent {

  readonly type = {
    "delete": 1
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
}
