import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'one-v-one-team-two-subs',
  templateUrl: './one-v-one-team-two-subs.component.html',
  styleUrls: ['../match-one-v-one.component.css']
})
export class OneVOneTeamTwoSubsComponent {
  @Input() subProps: any;
  @Output() sendSubRequestToParent: EventEmitter<{id: number, teamId: number}> = new EventEmitter<{id: number, teamId: number}>();
  
  initSubstitutionRequest(id: number, teamId: number) {
    this.sendSubRequestToParent.emit({ id, teamId });
  };
}
