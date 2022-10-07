import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClassComponent } from './home-class.component';

describe('HomeClassComponent', () => {
  let component: HomeClassComponent;
  let fixture: ComponentFixture<HomeClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
