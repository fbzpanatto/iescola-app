import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService } from "../person.service";
import { person } from "../person";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { DialogService } from "../../../shared/components/dialog/dialog.service";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  id: string | null = null

  form = new FormGroup({
    "name": new FormControl<string | null>(null, Validators.required),
    "cpf": new FormControl<string | null>(null, Validators.required),
    "rg": new FormControl<string | null>(null, Validators.required),
    "person_category_id": new FormControl<number | null>(null, Validators.required),
    "gender_id": new FormControl<number | null>(null, Validators.required)
  })

  constructor(
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService,
  ) {}

  ngOnInit(): void {
    this.onLoad()
      .then(id => {
        this.personService.getById(id)
          .subscribe({
            next: (person) => this.pathFormValues(person),
            error: (err) => this.handler(err, this.sendAlert)
          })
      })
  }

  onLoad() {
    this.id = this.route.snapshot.params['id']
    return new Promise<string>((resolve) => {
      this.id ? resolve(this.id) : this.form.reset()
    })
  }

  handler(err?:any, callback?: Function): void{
    if(callback && err) {
      const { status, message } = err
      this.router.navigate(['person'])
        .then(() => {
          callback(status, message)
        })
    } else {
      this.router.navigate(['person'])
        .then(() => {})
    }
  }

  sendAlert(status: number, message: string){
    alert(`${status}-${message}`)
  }

  pathFormValues(person: person) {
    this.form.patchValue({
      name: person.name,
      cpf: person.cpf,
      rg: person.rg,
      person_category_id: person.person_category_id,
      gender_id: person.gender_id
    })
  }

  onSubmit(): void {
    if(this.id) {
      this.personService.update(this.id, this.body())
        .subscribe({
          next: (_result) => this.handler(),
          error: (err) => this.handler(err, this.sendAlert)
        })
    } else {
      this.personService.create(this.body())
        .subscribe({
          next: (_result) => this.handler(),
          error: (err) => this.handler(err, this.sendAlert)
        })
    }
  }

  onDelete() {
    this.dialog.openDialog()
      .afterClosed()
      .subscribe(result => {
        if(!result) return
        this.personService.delete(this.id!)
          .subscribe({
            next: (_result) => this.handler(),
            error: (err) => this.handler(err, this.sendAlert)
          })
      })
  }

  body(): person {
    return {
      name: this.form.value.name!,
      cpf: this.form.value.cpf!,
      rg: this.form.value.rg!,
      person_category_id: this.form.value.person_category_id!,
      gender_id: this.form.value.gender_id!
    }
  }
}
