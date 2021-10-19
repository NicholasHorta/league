import { Injectable, Output } from '@angular/core';
import playersListJSON from '../../assets/league_players.json'


@Injectable({
  providedIn: 'root'
})

export class MatchSetupService {


  leagueTypeValue: number = 2;
  leagueTeamsArray: string[] = [
    'Iberia FC', 'White Isles Utd', 'Bavaria Stark', 'Clube Europa'
  ];
  generatedTeamsArray: string[] = [];

  matchTypeHandler(matchType: number) {
    this.leagueTypeValue = matchType;
    return this.leagueTypeValue
  }

  quickMatchSetupHandler() {
    let quickMatchTeamsArray: string[] = [...this.leagueTeamsArray];
    for(let i = 0; i < this.leagueTypeValue; i++){
      quickMatchTeamsArray.splice(
        Math.floor(Math.random() * quickMatchTeamsArray.length), 1);
    }
    return this.generatedTeamsArray = [...quickMatchTeamsArray];
  }

  leagueSetupHandler() {
    return this.generatedTeamsArray = [...this.leagueTeamsArray];
  }


}
