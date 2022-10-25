import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import { DialogComponent } from "./dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(): MatDialogRef<DialogComponent> {
    return this.dialog.open(DialogComponent, {
      width: '250px',
    });
  }
}
