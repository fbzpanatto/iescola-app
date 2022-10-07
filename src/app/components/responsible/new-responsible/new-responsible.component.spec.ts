import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResponsibleComponent } from './new-responsible.component';

describe('NewResponsibleComponent', () => {
  let component: NewResponsibleComponent;
  let fixture: ComponentFixture<NewResponsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResponsibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
