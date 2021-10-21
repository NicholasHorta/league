import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTeamsDisplayComponent } from './match-teams-display.component';

describe('MatchTeamsDisplayComponent', () => {
  let component: MatchTeamsDisplayComponent;
  let fixture: ComponentFixture<MatchTeamsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchTeamsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTeamsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
