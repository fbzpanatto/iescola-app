import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSchoolyearComponent } from './detail-schoolyear.component';

describe('DetailSchoolyearComponent', () => {
  let component: DetailSchoolyearComponent;
  let fixture: ComponentFixture<DetailSchoolyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSchoolyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSchoolyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
