import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'one-v-one-stats',
  templateUrl: './one-v-one-stats.component.html',
  styleUrls: ['./one-v-one-stats.component.css']
})
export class OneVOneStatsComponent {

  constructor(private render: Renderer2){}

  @Input() teamOneStats: any;
  @Input() teamTwoStats: any;
  @ViewChild('possessionTeamOne') possessionTeamOne?: ElementRef<HTMLSpanElement>;
  @ViewChild('possessionTeamTwo') possessionTeamTwo?: ElementRef<HTMLSpanElement>;

  ngDoCheck() {
    try {
      this.render.setStyle(this.possessionTeamOne!.nativeElement, 'width', `${this.teamOneStats.totalPossession / 465 * 100}%`);
      this.render.setStyle(this.possessionTeamTwo!.nativeElement, 'width', `${this.teamTwoStats.totalPossession / 465 * 100}%`);
    } catch (error) {
      console.warn('Pre-view Loaded');
    }
  }
}
