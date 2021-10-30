import { Component, ElementRef, OnInit } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'

@Component({
  selector: 'match-teams-display',
  templateUrl: './match-teams-display.component.html',
  styleUrls: ['./match-teams-display.component.css']
})
export class MatchTeamsDisplayComponent implements OnInit {

  constructor(public matchSetupSVC: MatchSetupService) { }

  ngOnInit(): void {
  }

  viewTeamOneSubs: boolean = false;
  viewTeamTwoSubs: boolean = false;
  viewTeamThreeSubs: boolean = false;
  viewTeamFourSubs: boolean = false;

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

}