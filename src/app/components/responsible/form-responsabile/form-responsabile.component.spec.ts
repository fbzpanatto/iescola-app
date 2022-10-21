import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResponsabileComponent } from './form-responsabile.component';

describe('FormResponsabileComponent', () => {
  let component: FormResponsabileComponent;
  let fixture: ComponentFixture<FormResponsabileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResponsabileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResponsabileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
