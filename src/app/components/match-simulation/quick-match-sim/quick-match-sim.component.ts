import { Component, Input, OnInit } from '@angular/core';
import { MatchSetupService } from 'src/app/services/match-setup.service';

@Component({
  selector: 'quick-match-sim',
  templateUrl: './quick-match-sim.component.html',
  styleUrls: ['./quick-match-sim.component.css']
})
export class QuickMatchSimComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService) { }

  @Input() teamSheetArr: any;
  teamOneStarters: any[] = [];
  teamTwoStarters: any[] = [];
  teamOneSubs: 
  teamTwoSubs:

  ngOnInit(): void {
    console.log('%c FINAL RESULT!!! => ', 'color: #bada55;', this.teamSheetArr);
    this.teamOneStarters = this.teamSheetArr.splice(0, 11);
    this.teamTwoStarters = this.teamSheetArr.splice(0, 11);

  }

}
