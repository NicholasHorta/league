import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'

@Component({
  selector: 'match-type-select',
  templateUrl: './match-type-select.component.html',
  styleUrls: ['./match-type-select.component.css']
})

export class MatchTypeSelectComponent implements OnInit {

  constructor(public matchSetupSVC: MatchSetupService) {}

  
  @Output() captaincyStringReset: EventEmitter<null> = new EventEmitter<null>();

  leagueTypeValue: number = this.matchSetupSVC.leagueTypeValue;

  ngOnInit(): void {
    this.matchSetupSVC.matchTypeHandler(this.leagueTypeValue);
    this.matchSetupSVC.quickMatchSetupHandler();
  }
  
  matchTypeHandler(matchType: number){
    this.leagueTypeValue = this.matchSetupSVC.matchTypeHandler(matchType);
    matchType === 2 ? 
    this.matchSetupSVC.quickMatchSetupHandler() : 
    this.matchSetupSVC.leagueSetupHandler();
  }

  clearCaptaincyStringValue(){
    this.captaincyStringReset.emit()
  }
}
