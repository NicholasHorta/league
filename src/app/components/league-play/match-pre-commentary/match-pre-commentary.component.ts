import { Component, Input } from '@angular/core';

@Component({
  selector: 'match-pre-commentary',
  templateUrl: './match-pre-commentary.component.html',
  styleUrls: ['./match-pre-commentary.component.css', '../../league-setup/match-select-buttons/match-select-buttons.component.css']
})
export class MatchPreCommentaryComponent {


  @Input() matchProps: any;
  commentaryView: boolean = true;

  toggleCommentaryView() {
    this.commentaryView = !this.commentaryView;
  };

}