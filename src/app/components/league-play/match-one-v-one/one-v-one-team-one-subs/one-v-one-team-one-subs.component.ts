import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'one-v-one-team-one-subs',
  templateUrl: './one-v-one-team-one-subs.component.html',
  styleUrls: ['../match-one-v-one.component.css']
})
export class OneVOneTeamOneSubsComponent {
  @Input() subProps: any;
  @Output() sendSubRequestToParent: EventEmitter<{id: number, teamId: number}> = new EventEmitter<{id: number, teamId: number}>();

  initSubstitutionRequest(id: number, teamId: number) {
    this.sendSubRequestToParent.emit({ id, teamId });
  };
}
