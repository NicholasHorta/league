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


  

  //   function rnd() { return Math.floor(Math.random() * 11) }

  // console.log('%cmatch-setup.service.ts line:97 object', 'color: #007acc;', this.playersTeam1[0]);
  // this.playersTeam1[0][rnd()].captain = true;
  // this.playersTeam2[0][rnd()].captain = true;
}
