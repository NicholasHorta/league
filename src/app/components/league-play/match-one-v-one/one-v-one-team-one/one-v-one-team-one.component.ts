import { Component, Input} from '@angular/core';

@Component({
  selector: 'one-v-one-team-one',
  templateUrl: './one-v-one-team-one.component.html',
  styleUrls: ['../match-one-v-one.component.css']
})
export class OneVOneTeamOneComponent {
  @Input() playerProps: any; 
}
