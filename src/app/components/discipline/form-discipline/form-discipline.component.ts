import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "../../../shared/components/dialog/dialog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { discipline } from "../../../shared/utils/types";
import { DisciplineService } from "../discipline.service";

@Component({
  selector: 'app-form-discipline',
  templateUrl: './form-discipline.component.html',
  styleUrls: ['./form-discipline.component.scss']
})
export class FormDisciplineComponent implements OnInit {

  id: string | null = null
  discipline: discipline | undefined

  form = new FormGroup({
    "name": new FormControl<string | null>(null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45)
      ])
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private disciplineService: DisciplineService,
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
    this.id? this.disciplineService.getById(this.id)
      .subscribe({
        next: (discipline:any) => this.pathFormValues(discipline),
        error: (err) => this.errorHandler(err.statusText, err.status)
      }) : null
  }

  onSubmit(): void {
    this.id ? this.onEdit() : this.onNew()
  }

  onEdit(): void {
    this.disciplineService.update(this.id!, this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onNew(): void {
    this.disciplineService.create(this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onDelete() {
    this.disciplineService.delete(this.id!)
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.statusText)
      })
  }

  askForDelete() {
    this.dialog.openDialog(`Deseja excluir ${this.discipline?.name}?`, 1)
      .afterClosed()
      .subscribe(result => result ? this.onDelete() : null)
  }

  backToList(){
    this.router.navigate(['discipline'])
  }

  errorHandler(statusText: string, errorStatus: number) {
    this.dialog.openDialog(statusText, errorStatus)
      .afterClosed()
      .subscribe(() => this.backToList())
  }

  pathFormValues(discipline: discipline) {
    this.discipline = discipline
    this.form.patchValue(this.discipline)
  }

  body(): Partial<discipline> {
    return {
      name: this.form.value.name!
    }
  }
}
