import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchoolyearComponent } from './form-schoolyear.component';

describe('FormSchoolyearComponent', () => {
  let component: FormSchoolyearComponent;
  let fixture: ComponentFixture<FormSchoolyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSchoolyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSchoolyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
