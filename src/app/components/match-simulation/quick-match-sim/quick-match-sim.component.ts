import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchSetupService } from 'src/app/services/match-setup.service';
import { MatchSimulationService } from 'src/app/services/match-simulation.service';

@Component({
  selector: 'quick-match-sim',
  templateUrl: './quick-match-sim.component.html',
  styleUrls: ['./quick-match-sim.component.css']
})
export class QuickMatchSimComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService, private matchSimSVC: MatchSimulationService) { }

  @Input() teamSheetArr: any;
  @Input() teams: any;
  @Input() matchTimeSeconds: number = 0;
  @Input() matchTimeMinutes: number = 0;
  @Output() emitMatchInit: EventEmitter<any> = new EventEmitter<any>();

  teamOneStarters: any[] = [];
  teamTwoStarters: any[] = [];
  teamOneSubs: any[] = this.matchSetupSVC.teamOne[1];
  teamTwoSubs: any[] = this.matchSetupSVC.teamTwo[1];
  confirmedTeams: string[] = [];
  currentPossession: string[] = [];
  matchStarted: boolean = false;

  
  ngOnInit(): void {
    this.teamOneStarters = this.teamSheetArr.splice(0, 11);
    this.teamTwoStarters = this.teamSheetArr.splice(0, 11);
  }

  ngDoCheck(){
    this.currentPossession = this.matchSimSVC.advantagePossessionTeams;
  }

  emitMatchInitHandler(){
    this.matchStarted = true;
    this.emitMatchInit.emit();
  }
 

}
