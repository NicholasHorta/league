import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'
import playersListJSON from '../../../../assets/league_players.json'

@Component({
  selector: 'match-type-select',
  templateUrl: './match-type-select.component.html',
  styleUrls: ['./match-type-select.component.css']
})

export class MatchTypeSelectComponent implements OnInit {

  constructor(public matchSetupSVC: MatchSetupService) {}

  @Output() emitMatchValue: EventEmitter<null> = new EventEmitter<null>();

  leagueTypeValue: number = this.matchSetupSVC.leagueTypeValue;

  ngOnInit(): void {
    this.matchSetupSVC.matchTypeHandler(this.leagueTypeValue);
    this.matchSetupSVC.quickMatchSetupHandler();
  }
  
  matchTypeHandler(matchType: number){
    this.leagueTypeValue = this.matchSetupSVC.matchTypeHandler(matchType);
    matchType === 2 ? 
    this.matchSetupSVC.quickMatchSetupHandler() 
    : this.matchSetupSVC.leagueSetupHandler();
    this.resetJsonValuesHandler()
  }

  resetJsonValuesHandler(){
    const list = Array(playersListJSON)
    list.forEach(i => {
      i['keeper'].forEach(player => player.captain = false)
      i['def'].forEach(player => player.captain = false)
      i['def-mid'].forEach(player => player.captain = false)
      i['att-mid'].forEach(player => player.captain = false)
      i['att'].forEach(player => player.captain = false)
    });
  }

  emitMatchValueChange(){
    console.log('%cmatch-setup.component.ts line:19 "IN PARENT"', 'color: #ae5a00;', "EMITTING");
    this.emitMatchValue.emit()
  }

}
