import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisciplineComponent } from './form-discipline.component';

describe('FormDisciplineComponent', () => {
  let component: FormDisciplineComponent;
  let fixture: ComponentFixture<FormDisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
