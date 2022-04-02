import { Component} from '@angular/core';

@Component({
  selector: 'guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {

  constructor() { }

  infoToggle: boolean = false;
  toggleMoreInfo(){
    this.infoToggle = !this.infoToggle;
  }
}
