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
  // matchMiliSecondInterval: number = 22.2;
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

  matchTimeHandler() {
    const refStartsGame = new Audio('../../../assets/audio/ref-game-start.mp3');
    refStartsGame.play();
    const matchTimeIncrement = setInterval(() => {
      console.log('%cmatch-simulation.component.ts line:42', 'color: #b00b13;', this.matchTimeTotalIncrement);
      this.matchTimeTotalIncrement += 1;
      this.matchTimeTotalIncrement % 60 === 0 ? this.matchSecondsVisual = 0 : this.matchSecondsVisual += 1;
      if (this.matchTimeTotalIncrement % 60 === 0) this.matchMinutesVisual += 1;
      if (this.matchTimeTotalIncrement >= this.matchFullTimeSeconds) {
        /// Insert winner into array
        // if(this.matchSetupSVC.leagueTypeValue === 2) this.matchSimSVC.cupRunSemiFinalWinners.push( [winner] )
        if (this.matchSetupSVC.leagueTypeValue === 4) {
          this.matchTimeTotalIncrement = 0;
          this.matchSecondsVisual = 0;
          this.matchMinutesVisual = 0;
          // this.matchSimSVC.cupRunSemiFinalWinners.push( [winner] )
        }
        clearInterval(matchTimeIncrement);
      }
    }, this.matchMiliSecondInterval);
  }

}
