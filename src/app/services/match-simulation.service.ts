import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchSimulationService implements OnInit {

  constructor() { }

  advantagePossessionTeams: string[] = [];
  cupRunSemiFinalWinners: string[] = [];
  possession: string[] = [];

  quickMatchWinner: string = '';

  matchStatus = {
    quickMatchInit: false,
    quickMatchEnd: false,
    semiFinalOneInit: false,
    semiFinalOneEnd: false,
    semiFinalTwoInit: false,
    semiFinalTwoEnd: false
  }

  teamPossession: object[] = [
    {team: '', possession: false},
    {team: '', possession: false},
    {team: '', possession: false},
    {team: '', possession: false},
  ] 

  // Start
  ngOnInit(){
  }

}
