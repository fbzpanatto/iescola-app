import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "../../../shared/components/dialog/dialog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SchoolYearService } from "../school-year.service";
import { school_year as schoolYear } from "../../../shared/utils/types";

@Component({
  selector: 'app-form-schoolyear',
  templateUrl: './form-schoolyear.component.html',
  styleUrls: ['./form-schoolyear.component.scss']
})
export class FormSchoolyearComponent implements OnInit {

  id: string | null = null
  schoolYear: schoolYear | undefined

  form = new FormGroup({
    "year": new FormControl<string | null>(null, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(4)]),
    "start": new FormControl<string | null>(null, [Validators.required]),
    "end": new FormControl<string | null>(null, [Validators.required])
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private schoolYearService: SchoolYearService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.start()
      .then(() => this.onLoad())
  }

  start(): Promise<boolean> {
    return new Promise<boolean>((resolve) => resolve(true))
  }

  onLoad() {
    this.id? this.schoolYearService.getById(this.id)
      .subscribe({
        next: (schoolYear) => this.pathFormValues(schoolYear),
        error: (err) => this.errorHandler(err.statusText, err.status)
      }) : null
  }

  onSubmit(): void {
    this.id ? this.onEdit() : this.onNew()
  }

  onEdit(): void {
    this.schoolYearService.update(this.id!, this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onNew(): void {
    this.schoolYearService.create(this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onDelete() {
    this.schoolYearService.delete(this.id!)
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.statusText)
      })
  }

  askForDelete() {
    this.dialog.openDialog(`Deseja excluir ${this.schoolYear?.year}?`, 1)
      .afterClosed()
      .subscribe(result => result ? this.onDelete() : null)
  }

  backToList(){
    this.router.navigate(['schoolyear'])
  }

  errorHandler(statusText: string, errorStatus: number) {
    this.dialog.openDialog(statusText, errorStatus)
      .afterClosed()
      .subscribe(() => this.backToList())
  }

  pathFormValues(schoolYear: schoolYear) {
    this.schoolYear = schoolYear
    this.form.patchValue(this.schoolYear)
  }

  body(): schoolYear {
    return {
      year: this.form.value.year!,
      start: this.form.value.start!,
      end: this.form.value.end!
    }
  }
}




