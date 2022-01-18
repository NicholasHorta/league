import { Component, OnInit } from '@angular/core';
import { MatchSetupService } from '../../../services/match-setup.service'

@Component({
  selector: 'match-introductions',
  templateUrl: './introductions.component.html',
  styleUrls: ['./introductions.component.css', '../../match-setup/match-type-select/match-type-select.component.css']
})
export class IntroductionsComponent implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService) { }

  matchType: Number = this.matchSetupSVC.leagueTypeValue;
  confirmedTeams: string[] = this.matchSetupSVC.generatedTeamsArray;
  confirmedQuickMatchTeamsArr: any[] = [...this.matchSetupSVC.teamOne[0], ...this.matchSetupSVC.teamTwo[0]];
  confirmedCupRunTeamsArr: any[] = [...this.matchSetupSVC.teamOne[0], ...this.matchSetupSVC.teamTwo[0], , ...this.matchSetupSVC.teamThree[0], , ...this.matchSetupSVC.teamFour[0]];
  teamOneCaptain: string = "";
  teamTwoCaptain: string = "";
  teamThreeCaptain: string = "";
  teamFourCaptain: string = "";
  commentaryView: boolean = true;

  ngOnInit(): void {
    if (this.matchSetupSVC.leagueTypeValue === 2) {
      const teamCaptainsArr = this.confirmedQuickMatchTeamsArr.filter(i => i.captain ? i : null);
      this.teamOneCaptain = teamCaptainsArr[0].name;
      this.teamTwoCaptain = teamCaptainsArr[1].name;
    } else {
      const teamCaptainsArr = this.confirmedCupRunTeamsArr.filter(i => i.captain ? i : null);
      this.teamOneCaptain = teamCaptainsArr[0].name;
      this.teamTwoCaptain = teamCaptainsArr[1].name;
      this.teamThreeCaptain = teamCaptainsArr[2].name;
      this.teamFourCaptain = teamCaptainsArr[3].name;
    }
  }

  toggleCommentaryView(){
    this.commentaryView = !this.commentaryView;
  }

}
