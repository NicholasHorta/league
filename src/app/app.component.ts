import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from './services/screen-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDesktop: boolean = true;

  constructor(private screenSizeService: ScreenSizeService){}

  ngOnInit(){
    this.isDesktop = this.screenSizeService.isDesktop();
  }
}
