import { Component, OnInit } from '@angular/core';
import { MatchSetupService } from '../../services/match-setup.service'

@Component({
  selector: 'match-simulation',
  templateUrl: './match-simulation.component.html',
  styleUrls: ['./match-simulation.component.css'],
})
export class MatchSimulationComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService) { }

  matchType: Number = this.matchSetupSVC.leagueTypeValue;
  confirmedTeams: string[] = this.matchSetupSVC.generatedTeamsArray;
  teamSheetArr: any[] = [];
  
  ngOnInit(): void {
  }

  emitTeamSheetToMatchSim(arr: any){
    this.teamSheetArr = arr;
  }



}
