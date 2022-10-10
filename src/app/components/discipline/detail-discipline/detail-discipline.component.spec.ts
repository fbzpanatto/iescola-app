import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDisciplineComponent } from './detail-discipline.component';

describe('DetailDisciplineComponent', () => {
  let component: DetailDisciplineComponent;
  let fixture: ComponentFixture<DetailDisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
