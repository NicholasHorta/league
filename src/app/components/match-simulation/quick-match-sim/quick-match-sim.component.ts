import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { MatchSetupService } from 'src/app/services/match-setup.service';
import { MatchSimulationService } from 'src/app/services/match-simulation.service';

@Component({
  selector: 'quick-match-sim',
  templateUrl: './quick-match-sim.component.html',
  styleUrls: ['./quick-match-sim.component.css']
})
export class QuickMatchSimComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService, private matchSimSVC: MatchSimulationService) { }

  @Input() teams: any;
  @Input('teamSheetArr') starters: any;
  @Input('matchTimeSeconds') seconds: number = 0;
  @Input('matchTimeMinutes') minutes: number = 0;
  @Output() emitMatchInit: EventEmitter<number> = new EventEmitter<number>();

  teamOneStarters: any[] = [];
  teamTwoStarters: any[] = [];
  teamOneSubs: any[] = this.matchSetupSVC.teamOne[1];
  teamTwoSubs: any[] = this.matchSetupSVC.teamTwo[1];
  // confirmedTeams: string[] = [];
  currentPossession: string[] = [];
  matchComplete: boolean = false;
  matchStarted: boolean = false;
  // setWinner: string = this.matchSimSVC.quickMatchWinner;


  ngOnInit(): void {
    this.teamOneStarters = this.starters.splice(0, 11);
    this.teamTwoStarters = this.starters.splice(0, 11);
  }

  ngDoCheck() {
    this.currentPossession = this.matchSimSVC.advantagePossessionTeams;
    if (this.matchSimSVC.matchStatus.quickMatchStatus) {
      this.matchStarted = false;
      this.matchComplete = true;
    }
    // console.log('%c matchComplete', 'color: #007acc;', this.matchComplete);
    // console.log('%c seconds', 'color: #ff7acc;', this.seconds);
    // console.log('%c minutes', 'color: #ff7acc;', this.minutes);
  }

  emitMatchInitHandler(matchId: number) {
    this.matchStarted = true;
    this.emitMatchInit.emit(matchId);
  }

  postGameResetHandler(){
    this.matchSetupSVC.leagueTypeValue = 0;
  }


}
