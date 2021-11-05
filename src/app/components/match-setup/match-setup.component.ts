import { Component, OnInit } from '@angular/core';
import { MatchSetupService } from '../../services/match-setup.service'


@Component({
  selector: 'match-setup',
  templateUrl: './match-setup.component.html',
  styleUrls: ['./match-setup.component.css']
})
export class MatchSetupComponent implements OnInit {

  constructor(public matchSetupSCV: MatchSetupService) {}

  ngOnInit(): void {

  }

  dop(){
    console.log('%cmatch-setup.component.ts line:19 "IN PARENT"', 'color: #ae5a00;', "IN PARENT");
  }

}
