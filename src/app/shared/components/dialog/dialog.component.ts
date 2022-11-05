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

    "invalidCredentials": {
      "status": 401,
      "message": "Credenciais inválidas"
    },

    "defaultHttpErros": {
      "message": "Não foi possível realizar esta ação no momento"
    }
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {}
}
