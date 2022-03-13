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
  /// Figure out what property is a constant end to the time function
  /// configure object properties as completed 
  matchTimeHandler(matchId: number) {
    console.log('%c SecondsVis', 'color: #007acc;', this.matchSecondsVisual);
    console.log('%c MinutesVis', 'color: #007acc;', this.matchMinutesVisual);
    console.log('%c TimeTotalIncrement', 'color: #007acc;', this.matchTimeTotalIncrement);
    this.audioHandler();
    const matchTimeIncrement = setInterval(() => {
      console.log('%c SecondsVis', 'color: #bada55;', this.matchSecondsVisual);
      console.log('%c MinutesVis', 'color: #bada55;', this.matchMinutesVisual);
      console.log('%c TimeTotalIncrement', 'color: #bada55;', this.matchTimeTotalIncrement);
      this.checkMatchInitStatusHandler(matchId);
      this.matchTimeTotalIncrement += 1;
      this.matchTimeTotalIncrement % 60 === 0 ? this.matchSecondsVisual = 0 : this.matchSecondsVisual += 1;
      if (this.matchTimeTotalIncrement % 60 === 0) this.matchMinutesVisual += 1;
      if (this.matchTimeTotalIncrement >= this.matchFullTimeSeconds) {
        this.checkMatchEndStatusHandler(matchId);
        clearInterval(matchTimeIncrement);
      }
    }, this.matchMiliSecondInterval);
  }

  audioHandler() {
    const refStartsGame = new Audio('../../../assets/audio/ref-game-start.mp3');
    refStartsGame.play();
  }

  checkMatchInitStatusHandler(matchId: number) {
    if (matchId === 1) this.matchSimSVC.matchStatus.semiFinalOneInit = true;
    if (matchId === 2) this.matchSimSVC.matchStatus.semiFinalTwoInit = true;
  }

  checkMatchEndStatusHandler(matchId: number) {
    if (!matchId) this.matchSimSVC.matchStatus.quickMatchEnd = true;
    if (matchId === 1) this.matchSimSVC.matchStatus.semiFinalOneEnd = true;
    if (matchId === 2) this.matchSimSVC.matchStatus.semiFinalTwoEnd = true;
  }


}
