import { Component, OnInit, Input } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service';
@Component({
  selector: 'cup-run-sim',
  templateUrl: './cup-run-sim.component.html',
  styleUrls: ['./cup-run-sim.component.css', '../quick-match-sim/quick-match-sim.component.css']
})
export class CupRunSimComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService) { }

  @Input() teamSheetArr: any;
  @Input() teams: any;
  teamOneStarters: any[] = [];
  teamTwoStarters: any[] = [];
  teamThreeStarters: any[] = [];
  teamFourStarters: any[] = [];
  teamOneSubs: any[] = this.matchSetupSVC.teamOne[1];
  teamTwoSubs: any[] = this.matchSetupSVC.teamTwo[1];
  teamThreeSubs: any[] = this.matchSetupSVC.teamThree[1];
  teamFourSubs: any[] = this.matchSetupSVC.teamFour[1];
  confirmedTeams: string[] = [];

  ngOnInit(): void {
    this.teamOneStarters = this.teamSheetArr.splice(0, 11);
    this.teamTwoStarters = this.teamSheetArr.splice(0, 11);
    this.teamThreeStarters = this.teamSheetArr.splice(0, 11);
    this.teamFourStarters = this.teamSheetArr.splice(0, 11);
  }

}
