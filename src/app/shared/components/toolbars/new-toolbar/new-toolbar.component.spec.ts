import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToolbarComponent } from './new-toolbar.component';

describe('NewToolbarComponent', () => {
  let component: NewToolbarComponent;
  let fixture: ComponentFixture<NewToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
