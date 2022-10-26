import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogComponent } from "./dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(message: string, status: number): MatDialogRef<DialogComponent> {
    return this.dialog.open(DialogComponent, {
      width: '350px',
      backdropClass: 'bg-drop-class',
      data: {message, status}
    });
  }
}
