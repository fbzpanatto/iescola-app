import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeActivityComponent } from './grade-activity.component';

describe('GradeActivityComponent', () => {
  let component: GradeActivityComponent;
  let fixture: ComponentFixture<GradeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
