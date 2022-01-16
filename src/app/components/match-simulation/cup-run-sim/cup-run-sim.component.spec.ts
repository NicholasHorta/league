import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupRunSimComponent } from './cup-run-sim.component';

describe('CupRunSimComponent', () => {
  let component: CupRunSimComponent;
  let fixture: ComponentFixture<CupRunSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupRunSimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupRunSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
