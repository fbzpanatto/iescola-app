import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { LoginComponent } from "./login.component";

@Injectable({
  providedIn: 'root'
})
export class LoginDialogService {

  constructor(private dialog: MatDialog) { }

  openLoginDialog(): MatDialogRef<LoginComponent> {
    return this.dialog.open(LoginComponent, {
      width: '500px',
      autoFocus: false,
      disableClose: true,
      backdropClass: 'bg-drop-class'
    })
  }
}
