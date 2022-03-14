import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentLocation: string = location.pathname;

  give(){
    console.log('%cnavbar.component.ts line:12 currentLocation', 'color: #007acc;', this.currentLocation);
    console.log('%cnavbar.component.ts line:12 currentLocation', 'color: #007acc;', location);
  }
}
