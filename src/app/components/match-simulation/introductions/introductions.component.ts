import { Component, OnInit } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'

@Component({
  selector: 'match-introductions',
  templateUrl: './introductions.component.html',
  styleUrls: ['./introductions.component.css']
})
export class IntroductionsComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService) { }

  matchType: Number = this.matchSetupSVC.leagueTypeValue;
  confirmedTeams: string[] = this.matchSetupSVC.generatedTeamsArray;
  confirmedTeamsArr: any[] = [...this.matchSetupSVC.teamOne[0], ...this.matchSetupSVC.teamTwo[0]];
  teamOneCaptain: string = "";
  teamTwoCaptain: string = "";

  ngOnInit(): void {
    const teamCaptainsArr = this.confirmedTeamsArr.filter(i => i.captain ? i : null);
    this.teamOneCaptain = teamCaptainsArr[0].name;
    this.teamTwoCaptain = teamCaptainsArr[1].name;
  }

}
