import { TestBed } from '@angular/core/testing';

import { MatchSimulationService } from './match-simulation.service';

describe('MatchSimulationService', () => {
  let service: MatchSimulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchSimulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
