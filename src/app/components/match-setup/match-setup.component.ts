import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { MatchSetupService } from '../../services/match-setup.service'
import { MatchTeamsDisplayComponent } from './match-teams-display/match-teams-display.component';


@Component({
  selector: 'match-setup',
  templateUrl: './match-setup.component.html',
  styleUrls: ['./match-setup.component.css']
})
export class MatchSetupComponent implements OnInit {


  constructor(public matchSetupSVC: MatchSetupService) { }


  ngOnInit(): void {
  }

}

