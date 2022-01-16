import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickMatchSimComponent } from './quick-match-sim.component';

describe('QuickMatchSimComponent', () => {
  let component: QuickMatchSimComponent;
  let fixture: ComponentFixture<QuickMatchSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickMatchSimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickMatchSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
