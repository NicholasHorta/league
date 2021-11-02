import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'
import { MyDirectiveDirective } from '../../../my-directive.directive'
import { FormationComponent } from './formation/formation.component';

@Component({
  selector: 'match-teams-display',
  templateUrl: './match-teams-display.component.html',
  styleUrls: ['./match-teams-display.component.css']
})
export class MatchTeamsDisplayComponent {

  constructor(public matchSetupSVC: MatchSetupService, public item: ElementRef) { }

  viewTeamOneSubs: boolean = false;
  viewTeamTwoSubs: boolean = false;
  viewTeamThreeSubs: boolean = false;
  viewTeamFourSubs: boolean = false;
  teamOneCaptain: string = "";
  teamTwoCaptain: string = "";
  teamThreeCaptain: string = "";
  teamFourCaptain: string = "";
  itemsExpanded: boolean = true;

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
        break
      case 4:
        this.viewTeamFourSubs = !view;
        break
    }
  }

  assignCaptainHandler(startersArray: any[], teamNumber: number) {
    let x = document.querySelectorAll('.toggle-view');
    x.forEach(i => {
      console.log('%cmatch-teams-display.component.ts line:64 x', 'color: #007acc;', i);
    })
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
        break
      case 4:
        this.teamFourCaptain = startersArray[randomPlayerNumber].name;
        break
    }

  }

  toggleTeamSheetViewHandler() {
    this.itemsExpanded = !this.itemsExpanded
  }
}