import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDisciplineComponent } from './home-discipline.component';

describe('HomeDisciplineComponent', () => {
  let component: HomeDisciplineComponent;
  let fixture: ComponentFixture<HomeDisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
