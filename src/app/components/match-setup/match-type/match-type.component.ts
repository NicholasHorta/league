import { Component, ElementRef, OnInit } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'

@Component({
  selector: 'app-match-type',
  templateUrl: './match-type.component.html',
  styleUrls: ['./match-type.component.css']
})

export class MatchTypeComponent implements OnInit {

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
