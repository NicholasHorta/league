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
    quickMatchStatus: false,
    semiFinalOne: false,
    semiFinalTwo: false
  }

  // Start
  ngOnInit(){
    
  }

}
