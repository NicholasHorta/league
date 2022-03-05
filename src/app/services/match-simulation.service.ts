import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchSimulationService {

  constructor() { }

  coinTossWinner: string = '';

  coinTossWinnerHandler(teams: string[]){
    console.log(teams);
  }
}
