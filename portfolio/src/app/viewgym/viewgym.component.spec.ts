import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgymComponent } from './viewgym.component';

describe('ViewgymComponent', () => {
  let component: ViewgymComponent;
  let fixture: ComponentFixture<ViewgymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewgymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
