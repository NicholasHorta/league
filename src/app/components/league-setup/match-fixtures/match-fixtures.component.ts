import { Component, Input } from '@angular/core';

@Component({
  selector: 'match-fixtures',
  templateUrl: './match-fixtures.component.html',
  styleUrls: ['../match-select-buttons/match-select-buttons.component.css']
})
export class MatchFixturesComponent  {
  @Input() matchSetupProps: any;
}
