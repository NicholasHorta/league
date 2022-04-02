import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component} from '@angular/core';
@Component({
  selector: 'guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('close', style({
        opacity: 0
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('1s')
      ])
    ])
  ]
})
export class GuideComponent {

  constructor() { }
  infoToggle: boolean = false;
  toggleMoreInfo(){
    this.infoToggle = !this.infoToggle;
  }
}
