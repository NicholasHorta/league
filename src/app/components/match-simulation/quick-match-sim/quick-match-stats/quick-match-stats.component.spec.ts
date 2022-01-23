import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickMatchStatsComponent } from './quick-match-stats.component';

describe('QuickMatchStatsComponent', () => {
  let component: QuickMatchStatsComponent;
  let fixture: ComponentFixture<QuickMatchStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickMatchStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickMatchStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
