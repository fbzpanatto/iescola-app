import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "../../../shared/components/dialog/dialog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { PeriodService } from "../period.service";
import { period, year } from "../../../shared/utils/types";
import { YearService } from "../../schoolyear/year.service";

@Component({
  selector: 'app-form-period',
  templateUrl: './form-period.component.html',
  styleUrls: ['./form-period.component.scss']
})
export class FormPeriodComponent implements OnInit {

  id: string | null = null
  period: period | undefined
  years: year[] = []

  form = new FormGroup({
    "name": new FormControl<string | null>(null, [Validators.required,]),
    "yearId": new FormControl<number | null>(null, [Validators.required,]),
    "start": new FormControl<Date | null>(null, [Validators.required]),
    "end": new FormControl<Date | null>(null, [Validators.required])
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private periodService: PeriodService,
    private yearService: YearService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      .then(async () => await this.fetchYears())
      .then(async () => await this.onLoad())
  }

  start(): Promise<boolean> {
    return new Promise<boolean>((resolve) => resolve(true))
  }

  async onLoad() {
    this.id? this.periodService.getById(this.id)
      .subscribe({
        next: (period:any) => this.pathFormValues(period),
        error: (err) => this.errorHandler(err.statusText, err.status)
      }) : null
  }

  async fetchYears(){
    this.yearService.getAll()
      .subscribe({
        next: (result:any) => this.years = result.value as year[],
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onSubmit(): void {
    this.id ? this.onEdit() : this.onNew()
  }

  onEdit(): void {

    this.periodService.update(this.id!, this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onNew(): void {
    this.periodService.create(this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onDelete() {
    this.periodService.delete(this.id!)
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.statusText)
      })
  }

  askForDelete() {
    this.dialog.openDialog(`Deseja excluir ${this.period?.name}?`, 1)
      .afterClosed()
      .subscribe(result => result ? this.onDelete() : null)
  }

  backToList(){
    this.router.navigate(['period'])
  }

  errorHandler(statusText: string, errorStatus: number) {
    this.dialog.openDialog(statusText, errorStatus)
      .afterClosed()
      .subscribe(() => this.backToList())
  }

  pathFormValues(period: period) {
    this.period = period
    this.form.patchValue(this.period)
  }

  body(): Partial<period> {
    return {
      name: this.form.value.name!,
      year: {
        id: this.form.value.yearId!
      },
      start: this.form.value.start!,
      end: this.form.value.end!
    }
  }
}
