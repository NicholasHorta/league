import { Component, OnInit } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'

@Component({
  selector: 'app-match-type',
  templateUrl: './match-type.component.html',
  styleUrls: ['./match-type.component.css']
})

export class MatchTypeComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService) {}

  matchTypeValue: number = this.matchSetupSVC.matchTypeValue;

  ngOnInit(): void {
    this.matchSetupSVC.matchTypeHandler(this.matchTypeValue)
  }
  
  matchTypeSvcHandler(type: number){
    this.matchTypeValue = this.matchSetupSVC.matchTypeHandler(type)
  }
}
