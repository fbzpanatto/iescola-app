import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClassTypeComponent } from './form-class-type.component';

describe('FormClassTypeComponent', () => {
  let component: FormClassTypeComponent;
  let fixture: ComponentFixture<FormClassTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClassTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormClassTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
