import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchoolyearComponent } from './new-schoolyear.component';

describe('NewSchoolyearComponent', () => {
  let component: NewSchoolyearComponent;
  let fixture: ComponentFixture<NewSchoolyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSchoolyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSchoolyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
