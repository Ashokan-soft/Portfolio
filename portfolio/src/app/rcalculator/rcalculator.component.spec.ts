import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcalculatorComponent } from './rcalculator.component';

describe('RcalculatorComponent', () => {
  let component: RcalculatorComponent;
  let fixture: ComponentFixture<RcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
