import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MatchSimulationService } from 'src/app/services/match-simulation.service';
import { MatchSetupService } from '../../../services/match-setup.service';

@Component({
  selector: 'cup-run-sim',
  templateUrl: './cup-run-sim.component.html',
  styleUrls: ['./cup-run-sim.component.css', '../quick-match-sim/quick-match-sim.component.css']
})
export class CupRunSimComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService, private matchSimSVC: MatchSimulationService) { }

  @Input() teams: any;
  @Input('teamSheetArr') starters: any;
  @Input('matchTimeSeconds') seconds: number = 0;
  @Input('matchTimeMinutes') minutes: number = 0;
  @Output() emitMatchInit: EventEmitter<number> = new EventEmitter<number>();
  @Output() emitTimeReset: EventEmitter<number> = new EventEmitter<number>();

  teamOneStarters: any[] = [];
  teamTwoStarters: any[] = [];
  teamThreeStarters: any[] = [];
  teamFourStarters: any[] = [];
  teamOneSubs: any[] = this.matchSetupSVC.teamOne[1];
  teamTwoSubs: any[] = this.matchSetupSVC.teamTwo[1];
  teamThreeSubs: any[] = this.matchSetupSVC.teamThree[1];
  teamFourSubs: any[] = this.matchSetupSVC.teamFour[1];

  // confirmedTeams: string[] = [];
  currentPossession: string[] = [];
  currentMatchId: number | null = null;
  totalMatchMinutes: number = 93;
  semiFinalOneStarted: boolean = false;
  semiFinalTwoStarted: boolean = false;
  semiFinalOneCompleted: boolean = false;
  semiFinalTwoCompleted: boolean = false;

  ngOnInit(): void {
    this.teamOneStarters = this.starters.splice(0, 11);
    this.teamTwoStarters = this.starters.splice(0, 11);
    this.teamThreeStarters = this.starters.splice(0, 11);
    this.teamFourStarters = this.starters.splice(0, 11);
  }

  ngDoCheck() {
    if (this.minutes === this.totalMatchMinutes) {
      if (this.currentMatchId === 1) this.matchSimSVC.matchStatus.semiFinalOneEnd = this.semiFinalOneCompleted = true;
      if (this.currentMatchId === 2) this.matchSimSVC.matchStatus.semiFinalTwoEnd = this.semiFinalTwoCompleted = true;
      // Promise.resolve().then(() => this.emitTimeResetHandler(0)).catch((error) => console.error(error));
      this.emitTimeResetHandler(0)
    }
    this.currentPossession = this.matchSimSVC.advantagePossessionTeams;
  }

  emitMatchInitHandler(matchId: number) {
    this.currentMatchId = matchId;
    if (matchId === 1) this.semiFinalOneStarted = true;
    if (matchId === 2) this.semiFinalTwoStarted = true;
    this.emitMatchInit.emit(matchId);
  }

  emitTimeResetHandler(baseZero: number) {
    this.emitTimeReset.emit(baseZero);
  }

}
