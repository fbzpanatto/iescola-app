import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonComponent } from './home-person.component';

describe('HomeEmployeeComponent', () => {
  let component: HomePersonComponent;
  let fixture: ComponentFixture<HomePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
