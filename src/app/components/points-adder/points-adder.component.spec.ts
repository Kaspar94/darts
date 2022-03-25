import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsAdderComponent } from './points-adder.component';

describe('PointsAdderComponent', () => {
  let component: PointsAdderComponent;
  let fixture: ComponentFixture<PointsAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
