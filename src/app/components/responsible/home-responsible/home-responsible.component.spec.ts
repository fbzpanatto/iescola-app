import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResponsibleComponent } from './home-responsible.component';

describe('HomeResponsibleComponent', () => {
  let component: HomeResponsibleComponent;
  let fixture: ComponentFixture<HomeResponsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeResponsibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
