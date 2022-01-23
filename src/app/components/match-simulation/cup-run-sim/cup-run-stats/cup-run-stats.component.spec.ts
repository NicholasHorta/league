import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupRunStatsComponent } from './cup-run-stats.component';

describe('CupRunStatsComponent', () => {
  let component: CupRunStatsComponent;
  let fixture: ComponentFixture<CupRunStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupRunStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupRunStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
