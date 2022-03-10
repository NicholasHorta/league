import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchSimulationService } from 'src/app/services/match-simulation.service';
import { MatchSetupService } from '../../services/match-setup.service'
@Component({
  selector: 'match-simulation',
  templateUrl: './match-simulation.component.html',
  styleUrls: ['./match-simulation.component.css'],
})
export class MatchSimulationComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService, private matchSimSVC: MatchSimulationService) { }

  matchType: Number = this.matchSetupSVC.leagueTypeValue;
  confirmedTeams: string[] = this.matchSetupSVC.generatedTeamsArray;
  teamSheetArr: any[] = [];
  matchFullTimeSeconds: number = 5580; // 2min (90min + 3min ET)
  /// matchMiliSecondInterval: number = 22.2;
  matchMiliSecondInterval: number = .2;
  matchTimeTotalIncrement: number = 0;
  matchSecondsVisual: number = 0;
  matchMinutesVisual: number = 0;
  

  ngOnInit(): void {
    console.dir(Observable);
  }

  emitTeamSheetToMatchSim(arr: any) {
    this.teamSheetArr = arr;
  }

  matchTimeHandler(matchId: number) {
    this.audioHandler();
    const matchTimeIncrement = setInterval(() => {
      this.matchTimeTotalIncrement += 1;
      this.matchTimeTotalIncrement % 60 === 0 ? this.matchSecondsVisual = 0 : this.matchSecondsVisual += 1;
      if (this.matchTimeTotalIncrement % 60 === 0) this.matchMinutesVisual += 1;
      if (this.matchTimeTotalIncrement >= this.matchFullTimeSeconds) {
        /// Insert winner into array
        if(!matchId) this.matchSimSVC.matchStatus.quickMatchStatus = true;
        if(matchId === 1) this.matchSimSVC.matchStatus.semiFinalOne = true;
        if(matchId === 2) this.matchSimSVC.matchStatus.semiFinalTwo = true;
        clearInterval(matchTimeIncrement);
      }
    }, this.matchMiliSecondInterval);
  }

  audioHandler(){
    const refStartsGame = new Audio('../../../assets/audio/ref-game-start.mp3');
    refStartsGame.play();
  }


}
