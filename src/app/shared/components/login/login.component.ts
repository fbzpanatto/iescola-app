import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { environment } from "src/environments/environment"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AuthenticationService } from "src/app/shared/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form = new FormGroup({
    "email": new FormControl<string | null>(null),
    "password": new FormControl<string | null>(null),
})

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: any,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    console.log(this.dialogData)
  }

  ngOnDestroy(): void {}

  close() {
    this.dialogRef.close({
      request: this.dialogData,
      response: {
        authenticated: 'this.authService.authenticated'
      }
    })
  }

  signIn() {
    this.authService.signIn(environment.bodyPost.email, environment.bodyPost.password)
      .then(() => this.close())
      .catch(error => console.log(error))
  }

  reset() {
  //  TODO:
  }
}
