import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "../../../shared/components/dialog/dialog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ClassTypeService } from "../class-type.service";
import { classType } from "../../../shared/utils/types";

@Component({
  selector: 'app-form-class-type',
  templateUrl: './form-class-type.component.html',
  styleUrls: ['./form-class-type.component.scss']
})
export class FormClassTypeComponent implements OnInit {

  id: string | null = null
  classType: classType | undefined

  form = new FormGroup({
    "name": new FormControl<string | null>(null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ])
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private classTypeService: ClassTypeService,
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
    this.id? this.classTypeService.getById(this.id)
      .subscribe({
        next: (classType:any) => this.pathFormValues(classType),
        error: (err) => this.errorHandler(err.statusText, err.status)
      }) : null
  }

  onSubmit(): void {
    this.id ? this.onEdit() : this.onNew()
  }

  onEdit(): void {
    this.classTypeService.update(this.id!, this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onNew(): void {
    this.classTypeService.create(this.body())
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.status)
      })
  }

  onDelete() {
    this.classTypeService.delete(this.id!)
      .subscribe({
        next: (_result) => this.backToList(),
        error: (err) => this.errorHandler(err.statusText, err.statusText)
      })
  }

  askForDelete() {
    this.dialog.openDialog(`Deseja excluir ${this.classType?.name}?`, 1)
      .afterClosed()
      .subscribe(result => result ? this.onDelete() : null)
  }

  backToList(){
    this.router.navigate(['classtype'])
  }

  errorHandler(statusText: string, errorStatus: number) {
    this.dialog.openDialog(statusText, errorStatus)
      .afterClosed()
      .subscribe(() => this.backToList())
  }

  pathFormValues(classType: classType) {
    this.classType = classType
    this.form.patchValue(this.classType)
  }

  body(): classType {
    return {
      name: this.form.value.name!
    }
  }
}
