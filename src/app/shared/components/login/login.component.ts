import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {shareReplay} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatDialogRef} from "@angular/material/dialog";
import {DialogService} from "../dialog/dialog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    "email": new FormControl<string | null>(null),
    "password": new FormControl<string | null>(null),
})

  constructor(
    private http: HttpClient,
    private dialog: DialogService,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void {}

  onSubmit() {

    this.wrapper()
      .then((value) => this.login(value.email!, value.password!))
  }

  wrapper() {
    const val = {
      email: environment.bodyPost.email,
      password: environment.bodyPost.password
    }
    return new Promise<Partial<{email: string | null, password: string | null}>>((resolve) => resolve(val))
  }

  login(email: string, password: string) {
    return this.http.post(environment.GIGABASE.PROOF_URL,
      {email, password, application: environment.bodyPost.application},
      {responseType: 'text'})
      .pipe(shareReplay())
      .subscribe({
        next: (result) => this.dialogRef.close(result),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  back(){
    this.router.navigate(['home'])
  }

  errorHandler(statusText: string, errorStatus: number) {
    this.dialog.openDialog(statusText, errorStatus)
      .afterClosed()
      .subscribe(() => this.back())
  }
}
