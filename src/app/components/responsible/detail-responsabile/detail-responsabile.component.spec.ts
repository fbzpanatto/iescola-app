import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResponsabileComponent } from './detail-responsabile.component';

describe('DetailResponsabileComponent', () => {
  let component: DetailResponsabileComponent;
  let fixture: ComponentFixture<DetailResponsabileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailResponsabileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailResponsabileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
