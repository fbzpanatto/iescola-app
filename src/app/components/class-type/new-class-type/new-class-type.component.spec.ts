import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassTypeComponent } from './new-class-type.component';

describe('NewClassTypeComponent', () => {
  let component: NewClassTypeComponent;
  let fixture: ComponentFixture<NewClassTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClassTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClassTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
