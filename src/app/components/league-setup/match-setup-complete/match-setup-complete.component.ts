import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'match-setup-complete',
  templateUrl: './match-setup-complete.component.html',
  styleUrls: ['./match-setup-complete.component.css']
})
export class MatchSetupCompleteComponent {

  @Input() matchSetupProps: any;
  @Output() confirmMatchPropsSettings: EventEmitter<null> = new EventEmitter<null>();

  ngDoCheck(){
    const teamOneCaptainAssigned = this.matchSetupProps.teamOneCaptain;
    const teamTwoCaptainAssigned = this.matchSetupProps.teamTwoCaptain;
    if(teamOneCaptainAssigned && teamTwoCaptainAssigned) {
      this.matchSetupProps.setupComplete = true;
    } else {
      this.matchSetupProps.setupComplete = false;
    };
  };

  proceedToMatchDayHandler(){
    this.confirmMatchPropsSettings.emit();
  };
}
