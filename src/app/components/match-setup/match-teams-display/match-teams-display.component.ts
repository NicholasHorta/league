import { Component, OnInit } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'

@Component({
  selector: 'match-teams-display',
  templateUrl: './match-teams-display.component.html',
  styleUrls: ['./match-teams-display.component.css']
})
export class MatchTeamsDisplayComponent implements OnInit {

  constructor(public matchSetupSVC: MatchSetupService) { }

  ngOnInit(): void {
  }

}
