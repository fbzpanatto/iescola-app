import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSchoolyearComponent } from './home-schoolyear.component';

describe('HomeSchoolyearComponent', () => {
  let component: HomeSchoolyearComponent;
  let fixture: ComponentFixture<HomeSchoolyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSchoolyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSchoolyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
