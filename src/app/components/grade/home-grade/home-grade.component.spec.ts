import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGradeComponent } from './home-grade.component';

describe('HomeGradeComponent', () => {
  let component: HomeGradeComponent;
  let fixture: ComponentFixture<HomeGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
