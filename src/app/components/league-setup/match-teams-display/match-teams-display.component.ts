import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'match-teams-display',
  templateUrl: './match-teams-display.component.html',
  styleUrls: ['./match-teams-display.component.css']
})

export class MatchTeamsDisplayComponent {

  @Input() matchSetupProps: any;
  @Output() captaincyAssignment: EventEmitter<object> = new EventEmitter<object>();
  viewTeamOneSubs: boolean = false;
  viewTeamTwoSubs: boolean = false;
  teamDisplayToggleTeamOne: boolean = true;
  teamDisplayToggleTeamTwo: boolean = true;
  teamSheetIndex: number[] = [1, 2, 3, 4];

  toggleTeamListHandler(view: boolean, teamNumber: number) {
    switch (teamNumber) {
      case 1:
        this.viewTeamOneSubs = !view;
        break;
      case 2:
        this.viewTeamTwoSubs = !view;
        break;
    };
  };

  toggleTeamSheetViewHandler(teamNumber: number) {
    switch(teamNumber){
      case 1:
        this.teamDisplayToggleTeamOne = !this.teamDisplayToggleTeamOne;
        break;
      case 2:
        this.teamDisplayToggleTeamTwo = !this.teamDisplayToggleTeamTwo;
        break;
    };
  };

  assignCaptainHandler(player: string, id: number){
    this.captaincyAssignment.emit({player, id});
  };
}
