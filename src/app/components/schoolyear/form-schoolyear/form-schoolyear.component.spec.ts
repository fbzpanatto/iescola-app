import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormYearComponent } from './form-year.component';

describe('FormSchoolyearComponent', () => {
  let component: FormYearComponent;
  let fixture: ComponentFixture<FormYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
