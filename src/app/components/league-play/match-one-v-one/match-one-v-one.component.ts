import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'match-one-v-one',
  templateUrl: './match-one-v-one.component.html',
  styleUrls: ['./match-one-v-one.component.css']
})
export class MatchOneVOneComponent {

  @Output() initGameplay: EventEmitter<null> = new EventEmitter<null>();
  @Output() fulfillSubRequest: EventEmitter<{id: number, teamId: number}> = new EventEmitter<{id: number, teamId: number}>();
  @Input('matchProgress') init: any;
  @Input() matchProps: any;
  @Input() teamOneStats: any;
  @Input() teamTwoStats: any;

  initGameplayCall(){
    this.initGameplay.emit();
  };

  receivedSubRequest(props: {id: number, teamId: number}){
    this.fulfillSubRequest.emit(props);
  };
}
