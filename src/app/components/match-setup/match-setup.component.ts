import { Component, OnInit, Output } from '@angular/core';
import { MatchSetupService } from '../../services/match-setup.service'


@Component({
  selector: 'match-setup',
  templateUrl: './match-setup.component.html',
  styleUrls: ['./match-setup.component.css']
})
export class MatchSetupComponent implements OnInit {

  // @Output 

  constructor(public matchSetupSVC: MatchSetupService) { }

  ngOnInit(): void {
  }


  proceedToMatchDayHandler() {

  }
}

