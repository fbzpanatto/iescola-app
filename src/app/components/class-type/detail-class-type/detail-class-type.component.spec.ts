import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClassTypeComponent } from './detail-class-type.component';

describe('DetailClassTypeComponent', () => {
  let component: DetailClassTypeComponent;
  let fixture: ComponentFixture<DetailClassTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClassTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailClassTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
