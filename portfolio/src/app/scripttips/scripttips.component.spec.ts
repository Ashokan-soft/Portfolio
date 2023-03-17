import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScripttipsComponent } from './scripttips.component';

describe('ScripttipsComponent', () => {
  let component: ScripttipsComponent;
  let fixture: ComponentFixture<ScripttipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScripttipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScripttipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
