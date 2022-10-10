import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePeriodComponent } from './home-period.component';

describe('HomePeriodComponent', () => {
  let component: HomePeriodComponent;
  let fixture: ComponentFixture<HomePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
