import { Component, Input } from '@angular/core';

@Component({
  selector: 'one-v-one-team-two',
  templateUrl: './one-v-one-team-two.component.html',
  styleUrls: ['../match-one-v-one.component.css']
})
export class OneVOneTeamTwoComponent {
  @Input() playerProps: any; 
}
