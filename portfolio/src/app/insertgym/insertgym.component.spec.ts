import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertgymComponent } from './insertgym.component';

describe('InsertgymComponent', () => {
  let component: InsertgymComponent;
  let fixture: ComponentFixture<InsertgymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertgymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertgymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
