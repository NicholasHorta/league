import { Injectable, Output } from '@angular/core';
import playersListJSON from '../../assets/league_players.json'


@Injectable({
  providedIn: 'root'
})

export class MatchSetupService {

  leagueTypeValue: number = 2;
  leagueTeamsArray: string[] = [
    'Galaxy FC', 'Valhalla Utd', 'Bavaria Stark', 'Clube Europa'
  ];
  generatedTeamsArray: string[] = [];
  subPositionSpliceArray: number[] = [5, 8, 10, 11];
  generatePlayersArray: {}[] = [];
  teamOne: any;
  teamTwo: any;
  teamThree: any;
  teamFour: any;


  matchTypeHandler(matchType: number) {
    this.leagueTypeValue = matchType;
    return this.leagueTypeValue
  }

  // A copy of the teams array is taken to remove two teams randomly 
  // The result is returned in an array of two remaining teams
  quickMatchSetupHandler() {
    this.randomiseTeamNamesArrayHandler(this.leagueTeamsArray);
  }
  // The result is returns the teams array in original state
  leagueSetupHandler() {
    this.randomiseTeamNamesArrayHandler(this.leagueTeamsArray);
  }

  randomiseTeamNamesArrayHandler(staticTeamsArray: string[]) {
    let dynamicTeamsArray: string[] = [...staticTeamsArray];
    if (this.leagueTypeValue === 2) {
      for (let i = 0; i < this.leagueTypeValue; i++) {
        dynamicTeamsArray.splice(
          Math.floor(Math.random() * this.leagueTypeValue), 1);
      }
    }
    this.generateTeamPlayersArrayHandler(this.leagueTypeValue);
    return this.generatedTeamsArray = [...dynamicTeamsArray];
  }

  generateTeamPlayersArrayHandler(teamsAmount: number) {
    // Provides a copy of an array with specific position arrays
    // [[4 - kpr], [20 - def], [16 - defmid], [12 - attmid], [8 - att]]
    const allPlayersArray = [
      [...playersListJSON['keeper']],
      [...playersListJSON['def']],
      [...playersListJSON['def-mid']],
      [...playersListJSON['att-mid']],
      [...playersListJSON['att']]
    ];

    this.resetJsonPropertiesOnChangeHandler(allPlayersArray);

    // [1 - kpr, 5 - defs, 4 - defmids, 3 - attmids, 2 - att] -- Including subs
    const playerPositionAmtAllocation: number[] = [1, 5, 4, 3, 2];

    // FOR amount of teams - 2 || 4 -> FOR amount of positions - 5 -> FOR each position total - 1-kp, 5-df, 4-dm, 3-da, 2-at ->
    let d = []
    for (let x = 0; x < teamsAmount; x++) {
      for (let i = 0; i < playerPositionAmtAllocation.length; i++) {
        // Each iteration checks amount of teams then positions amt, then Splices from the [AvailablePlayers] copy above on each iteration amount 1, 5, 4, 3, 2
        for (let j = 0; j < playerPositionAmtAllocation[i]; j++) {
          this.generatePlayersArray.push(
            ...allPlayersArray[i].splice(
              Math.floor(Math.random() * allPlayersArray[i].length
              ), 1)
          );
          // And will ultimately take a player from each postition for the amount of positions required
        }
      }
    }
    this.allocateFullTeamsheetsHandler(this.generatePlayersArray, teamsAmount)
  }


  allocateFullTeamsheetsHandler(generatedPlayersArray: {}[], teamsAmount: number) {
    // SubPositionSpliceValues array decreases with every number due to splice reduction within array on every execution 
    // Leaving us with one less in the array on each iteration which we account for in the provided SubPositionSpliceValues array
    function sortStarterAndSubsHandler(fullTeamList: {}[], subPositionSpliceValues: number[]) {
      const startingEleven = fullTeamList;
      let subs: any[] = [];
      subPositionSpliceValues.forEach(i => {
        subs.push(...fullTeamList.splice(i, 1));
      });
      const configuredTeam = [startingEleven, subs]
      return configuredTeam;
    }

    if (teamsAmount === 2) {
      this.teamOne = sortStarterAndSubsHandler(generatedPlayersArray.splice(0, 15), this.subPositionSpliceArray);
      this.teamTwo = sortStarterAndSubsHandler(generatedPlayersArray.splice(0, 15), this.subPositionSpliceArray);

    } else {
      this.teamOne = sortStarterAndSubsHandler(generatedPlayersArray.splice(0, 15), this.subPositionSpliceArray);
      this.teamTwo = sortStarterAndSubsHandler(generatedPlayersArray.splice(0, 15), this.subPositionSpliceArray);
      this.teamThree = sortStarterAndSubsHandler(generatedPlayersArray.splice(0, 15), this.subPositionSpliceArray);
      this.teamFour = sortStarterAndSubsHandler(generatedPlayersArray.splice(0, 15), this.subPositionSpliceArray);
    }
  }

  resetJsonPropertiesOnChangeHandler(allPlayersArray: any[][]){
    allPlayersArray.forEach(player => {
      player.forEach(i => {
        i.captain = false;
      })
    });
  }
}


