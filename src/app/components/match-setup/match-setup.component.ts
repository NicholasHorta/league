import { Component, OnInit } from '@angular/core';
import { MatchSetupService } from '../../services/match-setup.service'


@Component({
  selector: 'match-setup',
  templateUrl: './match-setup.component.html',
  styleUrls: ['./match-setup.component.css']
})
export class MatchSetupComponent implements OnInit {

  constructor(public matchSetupSVC: MatchSetupService) { }

  ngOnInit(): void {
  }


  proceedToMatchDayHandler() {
    console.log('%cmatch-setup.component.ts line:19 ', 'color: #007acc;', this.matchSetupSVC);
  }
}

