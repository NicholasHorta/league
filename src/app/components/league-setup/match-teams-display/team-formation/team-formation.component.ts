import { Component, Input } from '@angular/core';

@Component({
  selector: 'team-formation',
  templateUrl: './team-formation.component.html',
  styleUrls: ['./team-formation.component.css']
})
export class TeamFormationComponent {

  @Input() players: any;
  @Input() teamIndex: number = 0;
  playerPositionAmtDefs: any = new Array(4);
  playerPositionAmtMids: any = new Array(3);
  playerPositionAmtAms: any = new Array(2);

  get defs() {
    return this.playerPositionAmtDefs;
  };
  get mids() {
    return this.playerPositionAmtMids;
  };
  get ams() {
    return this.playerPositionAmtAms;
  };
}
