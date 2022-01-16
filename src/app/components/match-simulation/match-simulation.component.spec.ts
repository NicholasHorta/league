import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSimulationComponent } from './match-simulation.component';

describe('MatchSimulationComponent', () => {
  let component: MatchSimulationComponent;
  let fixture: ComponentFixture<MatchSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchSimulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
