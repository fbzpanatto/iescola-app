import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith } from 'rxjs'

@Component({
  selector: 'app-new-responsible',
  templateUrl: './new-responsible.component.html',
  styleUrls: ['./new-responsible.component.scss']
})
export class NewResponsibleComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA]
  fruitCtrl = new FormControl('')
  filteredFruits: Observable<string[]> = new Observable<string[]>()
  fruits: string[] = ['Lemon']
  allFruits: string[] = ['João Guilherme', 'Lemon', 'Aisha da Silva Santos', 'Rodrigo Emanuel Quirino', 'Strawberry']

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice()))
    )
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent) :void {
    const value = (event.value || '').trim()

  //  add our fruit
    if(value) {
      this.fruits.push(value)
    }
  //  Clear the input value
    event.chipInput!.clear()
  }

  remove(fruit: string) :void {
    const index = this.fruits.indexOf(fruit)
    if(index >=0) {
      this.fruits.splice(index, 1)
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue)
    this.fruitInput.nativeElement.value = ''
    this.fruitCtrl.setValue(null);
  }

  private _filter(value:string): string[] {
    const filterValue = value.toLowerCase()
    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue))
  }

  onSave() {}

}
