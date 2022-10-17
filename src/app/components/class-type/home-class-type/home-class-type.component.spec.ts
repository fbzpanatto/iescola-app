import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClassTypeComponent } from './home-class-type.component';

describe('HomeClassTypeComponent', () => {
  let component: HomeClassTypeComponent;
  let fixture: ComponentFixture<HomeClassTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeClassTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeClassTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
