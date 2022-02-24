import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {

  @Input() teamOne: string = '';
  @Input() teamTwo: string = '';
  @Input() teamThree: string = '';
  @Input() teamFour: string = '';

  playerPositionAmtDefs: any = new Array(4);
  playerPositionAmtMids: any = new Array(3);
  playerPositionAmtAms: any = new Array(2);

  get defs() {
    return this.playerPositionAmtDefs;
  }
  get mids() {
    return this.playerPositionAmtMids;
  }
  get ams() {
    return this.playerPositionAmtAms;
  }

}
