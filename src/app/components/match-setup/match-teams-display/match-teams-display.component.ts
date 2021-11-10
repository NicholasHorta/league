import { Component, Input } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'


@Component({
  selector: 'match-teams-display',
  templateUrl: './match-teams-display.component.html',
  styleUrls: ['./match-teams-display.component.css']
})

export class MatchTeamsDisplayComponent {

  constructor(public matchSetupSVC: MatchSetupService) { }


  viewTeamOneSubs: boolean = false;
  viewTeamTwoSubs: boolean = false;
  viewTeamThreeSubs: boolean = false;
  viewTeamFourSubs: boolean = false;
  teamOneCaptain: string = "";
  teamTwoCaptain: string = "";
  teamThreeCaptain: string = "";
  teamFourCaptain: string = "";
  teamDisplayToggleTeamOne: boolean = true;
  teamDisplayToggleTeamTwo: boolean = true;
  teamDisplayToggleTeamThree: boolean = true;
  teamDisplayToggleTeamFour: boolean = true;



  toggleTeamListHandler(view: boolean, teamNumber: number) {
    switch (teamNumber) {
      case 1:
        this.viewTeamOneSubs = !view
        break;
      case 2:
        this.viewTeamTwoSubs = !view
        break;
      case 3:
        this.viewTeamThreeSubs = !view;
        break;
      case 4:
        this.viewTeamFourSubs = !view;
        break;
    }
  }

  assignCaptainHandler(startersArray: any[], teamNumber: number) {
    startersArray.forEach(player => {
      player.captain = false;
    });
    const randomPlayerNumber = Math.floor(Math.random() * startersArray.length);
    startersArray[randomPlayerNumber].captain = true;
    switch (teamNumber) {
      case 1:
        this.teamOneCaptain = startersArray[randomPlayerNumber].name;
        break;
      case 2:
        this.teamTwoCaptain = startersArray[randomPlayerNumber].name;
        break;
      case 3:
        this.teamThreeCaptain = startersArray[randomPlayerNumber].name;
        break;
      case 4:
        this.teamFourCaptain = startersArray[randomPlayerNumber].name;
        break;
    }
  }

  toggleTeamSheetViewHandler(teamNumber: number) {
    switch(teamNumber){
      case 1:
        this.teamDisplayToggleTeamOne = !this.teamDisplayToggleTeamOne;
        break;
      case 2:
        this.teamDisplayToggleTeamTwo = !this.teamDisplayToggleTeamTwo;
        break;
      case 3:
        this.teamDisplayToggleTeamThree = !this.teamDisplayToggleTeamThree;
        break;
      case 4:
        this.teamDisplayToggleTeamFour = !this.teamDisplayToggleTeamFour;
        break;
    }
  }

  unassignCaptainKeyString() {
    this.teamOneCaptain = "";
    this.teamTwoCaptain = "";
    this.teamThreeCaptain = "";
    this.teamFourCaptain = "";
  }
}