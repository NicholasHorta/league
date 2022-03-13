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
  currentPossession: string[] = [];
  totalMatchMinutes: number = 93;
  matchStarted: boolean = false;
  matchComplete: boolean = false;


  ngOnInit(): void {
    this.teamOneStarters = this.starters.splice(0, 11);
    this.teamTwoStarters = this.starters.splice(0, 11);
  }

  ngDoCheck() {
    this.currentPossession = this.matchSimSVC.advantagePossessionTeams;
    // this.matchSimSVC.matchStatus.quickMatchInit = this.matchStarted;
    // console.log('%c BEFORE', 'color: #ff7acc;', this.matchComplete);
    console.log('%cquick-match-sim.component.ts line:39 this', 'color: #007acc;', this.minutes);
    if(this.minutes === this.totalMatchMinutes){
      console.log('%cquick-match-sim.component.ts line:41', 'color: #ff7acc;', "got to set start false");
      this.matchSimSVC.matchStatus.quickMatchInit = this.matchStarted = false;
      this.matchSimSVC.matchStatus.quickMatchEnd = this.matchComplete = true;
    } 
  }

  emitMatchInitHandler(matchId: number) {
    this.matchSimSVC.matchStatus.quickMatchInit = this.matchStarted = true;
    this.emitMatchInit.emit(matchId);
  }

  postGameResetHandler(){
    this.matchSetupSVC.leagueTypeValue = 0;
  }


}
