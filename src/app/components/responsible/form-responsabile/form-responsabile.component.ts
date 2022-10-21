import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith } from 'rxjs'

@Component({
  selector: 'app-form-responsabile',
  templateUrl: './form-responsabile.component.html',
  styleUrls: ['./form-responsabile.component.scss']
})
export class FormResponsabileComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA]
  studentCtrl = new FormControl('')
  filteredStudents: Observable<string[]> = new Observable<string[]>()
  students: string[] = []
  allStudents: string[] = ['João Guilherme', 'Aisha da Silva Santos', 'Rodrigo Emanuel Quirino']

  @ViewChild('studentInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredStudents = this.studentCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allStudents.slice()))
    )
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent) :void {
    const value = (event.value || '').trim()

    //  add our fruit
    if(value) {
      this.students.push(value)
    }
    //  Clear the input value
    event.chipInput!.clear()
  }

  remove(fruit: string) :void {
    const index = this.students.indexOf(fruit)
    if(index >=0) {
      this.students.splice(index, 1)
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.students.push(event.option.viewValue)
    this.fruitInput.nativeElement.value = ''
    this.studentCtrl.setValue(null);
  }

  private _filter(value:string): string[] {
    const filterValue = value.toLowerCase()
    return this.allStudents.filter(fruit => fruit.toLowerCase().includes(filterValue))
  }

  onSave() {}

}
