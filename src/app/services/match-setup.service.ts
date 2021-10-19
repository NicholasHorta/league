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

  // A copy of the teams array is taken to remove two teams randomly 
  // The result is returned in an array of two remaining teams
  quickMatchSetupHandler() {
    let quickMatchTeamsArray: string[] = [...this.leagueTeamsArray];
    for (let i = 0; i < this.leagueTypeValue; i++) {
      quickMatchTeamsArray.splice(
        Math.floor(Math.random() * quickMatchTeamsArray.length), 1);
    }
    this.generateTeamLists(this.leagueTypeValue);
    return this.generatedTeamsArray = [...quickMatchTeamsArray];
  }

  // The result is returned in an array of all teams
  leagueSetupHandler() {
    this.generateTeamLists(this.leagueTypeValue);
    return this.generatedTeamsArray = [...this.leagueTeamsArray];
  }

  generateTeamLists(teamsAmount: number) {
    const keeper = [...playersListJSON['keeper']];
    const defence = [...playersListJSON['def']];
    const defensiveMid = [...playersListJSON['def-mid']];
    const attackingMid = [...playersListJSON['att-mid']];
    const attack = [...playersListJSON['att']];
    const asd = [keeper, defence, defensiveMid, attackingMid, attack];
    let arr: Object[] = [];
    const teamSheetPlayerAmt: number[] = [1, 5, 4, 3, 2];
    
    for (let x = 0; x < teamsAmount; x++) {
      for (let i = 0; i < teamSheetPlayerAmt.length; i++) {
        for (let j = 0; j < teamSheetPlayerAmt[i]; j++) {
          arr.push(asd[i][j])
        }
      }
    }
    console.log('%cmatch-setup.service.ts line:58 arr', 'color: #007acc;', arr);

    // this.genKeepers();
  }
  // const keeper = { posts: [...playersListJSON['keeper']]};
  // const defence = { def: [...playersListJSON['def']]};
  // const defensiveMid = { defMid: [...playersListJSON['def-mid']]}; 
  // const attackingMid = { attMid: [...playersListJSON['att-mid']]};
  // const attack = { att: [...playersListJSON['att']]};



}
