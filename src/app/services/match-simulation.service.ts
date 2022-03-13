import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchSimulationService implements OnInit {

  constructor() { }

  advantagePossessionTeams: string[] = [];
  cupRunSemiFinalWinners: string[] = [];

  quickMatchWinner: string = '';

  matchStatus = {
    quickMatchInit: false,
    quickMatchEnd: false,
    semiFinalOneInit: false,
    semiFinalOneEnd: false,
    semiFinalTwoInit: false,
    semiFinalTwoEnd: false
  }

  // Start
  ngOnInit(){
    
  }

}
