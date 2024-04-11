import { Component, OnInit } from '@angular/core';
import { MatchPropertiesService } from 'src/app/services/match-properties.service';
import { MatchSetupProperties } from './models/match-setup-properties.model';
import playersListJSON from '../../../assets/json/league_players.json';
import classicPlayersListJSON from '../../../assets/json/classic_players.json';
import Util from 'src/app/utils/utilities';
@Component({
  selector: 'league-setup',
  templateUrl: './league-setup.component.html',
  styleUrls: ['./league-setup.component.css']
})

export class LeagueSetupComponent implements OnInit {

  constructor(private matchPropertiesSVC: MatchPropertiesService) { }

  classicMode: boolean = false;
  currentPlayersList: any = JSON.parse(JSON.stringify(playersListJSON));
  classicPlayersList: any = JSON.parse(JSON.stringify(classicPlayersListJSON));
  mutablePlayersObject: any = this.currentPlayersList;
  defaultTeamsAvailable: string[] = ['Galaxy FC', 'Valhalla Utd', 'Bavaria Stark', 'Clube Europa'];
  classicTeamsAvailable: string[] = ['América do Sul FC', 'Iberia Club de Fútbol', 'West Bavaria Utd', 'Klub Soviet'];
  defaultManagersAvailable: string[] = ['Pep Guardiola', 'Jose Mourinho', 'Jurgen Klopp', 'Zinedine Zidane'];
  classicManagersAvailable: string[] = ['Alex Ferguson', 'Bobby Robson', 'Rinus Michels', 'Helenio Herrera'];
  defaultSubsSpliceValues: number[] = [5, 8, 10, 11];
  defaultAmountOfPlayersPerPosition: number[] = [1, 5, 4, 3, 2];

  matchSetupProperties: MatchSetupProperties = new MatchSetupProperties(
    [], [], [], [], [],
    '', '', 0, false, false
  );


  ngOnInit() {
    this.randomiseTeamsHandler();
    this.captaincyHandler({ id: 0 });
  };

  reGenerateHandler() {
    this.randomiseTeamsHandler();
    this.captaincyHandler({ id: 0 });
  };

  classicMatchToggleHandler() {
    this.classicMode = !this.classicMode;
    if (this.classicMode) {
      this.mutablePlayersObject = this.classicPlayersList;
    } else {
      this.mutablePlayersObject = this.currentPlayersList;
    };
    this.reGenerateHandler();
  };

  randomiseTeamsHandler() {
    const dynamicTeamsArray = this.classicMode ? [...this.classicTeamsAvailable] : [...this.defaultTeamsAvailable];
    const teamsList = Util.randomiseArrayHandler(dynamicTeamsArray);
    this.splitTeamSetsHandler(teamsList);
    this.generatePlayersArrayHandler();
    this.randomiseManagersHandler();
  };

  randomiseManagersHandler() {
    const dynamicManagersArray = this.classicMode ? [...this.classicManagersAvailable] : [...this.defaultManagersAvailable];
    const managersList = Util.randomiseArrayHandler(dynamicManagersArray);
    this.matchSetupProperties.managerSetOne = managersList;
  };

  splitTeamSetsHandler(participatingTeams: string[]) {
    const participatingTeamsArray = [...participatingTeams];
    this.matchSetupProperties.teamSetOne = [];
    this.matchSetupProperties.teamSetOne = participatingTeamsArray;
  };

  generatePlayersArrayHandler() {
    const playersArrayToPopulate = [];
    // Provides a copy of an array with specific position arrays
    // [[4 - kpr], [20 - def], [16 - defmid], [12 - attmid], [8 - att]]
    const allPlayersArray = [
      [...this.mutablePlayersObject['keeper']],
      [...this.mutablePlayersObject['def']],
      [...this.mutablePlayersObject['def-mid']],
      [...this.mutablePlayersObject['att-mid']],
      [...this.mutablePlayersObject['att']]
    ];

    // [1 - kpr, 5 - defs, 4 - defmids, 3 - attmids, 2 - att] -- Including subs
    const playersPerPositionAllocation: number[] = this.defaultAmountOfPlayersPerPosition;

    // FOR amount of teams - 2 -> FOR amount of positions - 5 -> FOR each position total - 1-kp, 5-df, 4-dm, 3-da, 2-at ->
    for (let x = 0; x < 2; x++) {
      for (let i = 0; i < playersPerPositionAllocation.length; i++) {
        // Each iteration checks amount of teams then positions amt,
        // then Splices from the [AvailablePlayers] copy above on each iteration amount 1, 5, 4, 3, 2
        for (let j = 0; j < playersPerPositionAllocation[i]; j++) {
          playersArrayToPopulate.push(
            ...allPlayersArray[i].splice(
              Util.returnRandomValueFromArg(allPlayersArray[i].length), 1)
          );
          // And will ultimately take a player from each postition for the amount of positions required
        };
      };
    };
    this.allocateFullTeamsheetsHandler(playersArrayToPopulate)
  };

  allocateFullTeamsheetsHandler(genPlayersArray: {}[]) {
    // subSpliceValuesArr array decreases with every number due to splice reduction within array on every execution
    // Leaving us with one less in the array on each iteration
    // which we account for in the provided SubPositionSpliceValues array for each sub position
    const allocateStarterAndSubHandler = (totalPlayersArr: {}[], subSpliceValues: number[]) => {
      let subs: any[] = [];
      subSpliceValues.forEach(i => {
        subs.push(...totalPlayersArr.splice(i, 1));
      });
      return [totalPlayersArr, subs];
    };

    const subSpliceValuesArr = this.defaultSubsSpliceValues;
    this.matchSetupProperties.generatedTeamOne = allocateStarterAndSubHandler(
      genPlayersArray.splice(0, 15), subSpliceValuesArr
    );
    this.matchSetupProperties.generatedTeamTwo = allocateStarterAndSubHandler(
      genPlayersArray.splice(0, 15), subSpliceValuesArr
    );
  };


  captaincyHandler(captaincyObj: any) {
    if (captaincyObj.id === 1) {
      this.matchSetupProperties.generatedTeamOne[0].forEach((i: any) => {
        if (captaincyObj.player === i.name) {
          i.captain = true;
          this.matchSetupProperties.teamOneCaptain = i.name;
        } else {
          i.captain = false;
        };
      });
    } else if (captaincyObj.id === 2) {
      this.matchSetupProperties.generatedTeamTwo[0].forEach((i: any) => {
        if (captaincyObj.player === i.name) {
          i.captain = true;
          this.matchSetupProperties.teamTwoCaptain = i.name;
        } else {
          i.captain = false;
        };
      });
    } else if (!captaincyObj.id) {
      this.matchSetupProperties.generatedTeamOne[0].forEach((i: any) => i.captain = false);
      this.matchSetupProperties.generatedTeamTwo[0].forEach((i: any) => i.captain = false);
      // Reset string values
      this.matchSetupProperties.teamOneCaptain = "";
      this.matchSetupProperties.teamTwoCaptain = "";
    };
  };

  confirmMatchPropertiesHandler() {
    this.matchPropertiesSVC.setMatchPropertiesHandler(this.matchSetupProperties);
  };
}
