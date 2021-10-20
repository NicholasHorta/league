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
  generatePlayersArray: {}[] = [];
  playersTeam1: any;
  playersTeam2: any;
  playersTeam3: any;
  playersTeam4: any;


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
    const availablePlayersArray = [
      [...playersListJSON['keeper']],
      [...playersListJSON['def']],
      [...playersListJSON['def-mid']],
      [...playersListJSON['att-mid']],
      [...playersListJSON['att']]
    ];
   
    const perTeamPositionAllocation: number[] = [1, 5, 4, 3, 2];

    for (let x = 0; x < teamsAmount; x++) {
      for (let i = 0; i < perTeamPositionAllocation.length; i++) {
        for (let j = 0; j < perTeamPositionAllocation[i]; j++) {
          this.generatePlayersArray.push(
            ...availablePlayersArray[i].splice(Math.floor(Math.random() * availablePlayersArray[i].length), 1)
          );
        }
      }
    }
    this.allocateTeamPlayersHandler(this.generatePlayersArray, teamsAmount)
  }

  allocateTeamPlayersHandler(generatedPlayersArray: {}[], teamsAmount: number){
    if(teamsAmount === 2){
      this.playersTeam1 = generatedPlayersArray.splice(0, 15);
      this.playersTeam2 = generatedPlayersArray.splice(0, 15);
    } else {
      this.playersTeam1 = generatedPlayersArray.splice(0, 15);
      this.playersTeam2 = generatedPlayersArray.splice(0, 15);
      this.playersTeam3 = generatedPlayersArray.splice(0, 15);
      this.playersTeam4 = generatedPlayersArray.splice(0, 15);
    }
  }

}
