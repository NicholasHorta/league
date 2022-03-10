import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatchSimulationService } from 'src/app/services/match-simulation.service';
import { MatchSetupService } from '../../../services/match-setup.service';

@Component({
  selector: 'cup-run-sim',
  templateUrl: './cup-run-sim.component.html',
  styleUrls: ['./cup-run-sim.component.css', '../quick-match-sim/quick-match-sim.component.css']
})
export class CupRunSimComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService, private matchSimSVC: MatchSimulationService) { }

  @Input() teamSheetArr: any;
  @Input() teams: any;
  @Input('matchTimeSeconds') seconds: number = 0;
  @Input('matchTimeMinutes') minutes: number = 0;
  @Output() emitMatchInit: EventEmitter<number> = new EventEmitter<number>();

  teamOneSubs: any[] = this.matchSetupSVC.teamOne[1];
  teamTwoSubs: any[] = this.matchSetupSVC.teamTwo[1];
  teamThreeSubs: any[] = this.matchSetupSVC.teamThree[1];
  teamFourSubs: any[] = this.matchSetupSVC.teamFour[1];
  teamOneStarters: any[] = [];
  teamTwoStarters: any[] = [];
  teamThreeStarters: any[] = [];
  teamFourStarters: any[] = [];
  confirmedTeams: string[] = [];
  currentPossession: string[] = [];
  semiFinalOneStarted: boolean = false;
  semiFinalTwoStarted: boolean = false;

  cupRunProgress = {
    // Each match will show conditionally according to semiFinalX property update
    semiFinalOne: true,
    semiFinalTwo: false,
    finalMatch: false,
    teamsInTheFinal: []
  }

  ngOnInit(): void {
    this.teamOneStarters = this.teamSheetArr.splice(0, 11);
    this.teamTwoStarters = this.teamSheetArr.splice(0, 11);
    this.teamThreeStarters = this.teamSheetArr.splice(0, 11);
    this.teamFourStarters = this.teamSheetArr.splice(0, 11);
  }

  ngDoCheck(){
    this.currentPossession = this.matchSimSVC.advantagePossessionTeams;
  }

  emitMatchInitHandler(matchId: number){
    /// Handle button disabling
    this.emitMatchInit.emit(matchId);
  }
 

}
