import { Component, ElementRef, OnInit } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'

@Component({
  selector: 'match-type-select',
  templateUrl: './match-type-select.component.html',
  styleUrls: ['./match-type-select.component.css']
})

export class MatchTypeSelectComponent implements OnInit {

  constructor(public matchSetupSVC: MatchSetupService) {}

  leagueTypeValue: number = this.matchSetupSVC.leagueTypeValue;

  ngOnInit(): void {
    this.matchSetupSVC.matchTypeHandler(this.leagueTypeValue);
    this.matchSetupSVC.quickMatchSetupHandler();
  }
  
  matchTypeSvcHandler(matchType: number){
    this.leagueTypeValue = this.matchSetupSVC.matchTypeHandler(matchType);
    matchType === 2 ? 
    this.matchSetupSVC.quickMatchSetupHandler() 
    : this.matchSetupSVC.leagueSetupHandler();
  }

}
