import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchSimulationService implements OnInit {

  constructor() { }

  advantagePossessionTeams: string[] = [];
  cupRunSemiFinalWinners: string[] = [];
  // Start
  ngOnInit(){
    
  }

}
