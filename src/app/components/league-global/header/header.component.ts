import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private screenSizeService: ScreenSizeService){}

  isDesktop: boolean = true;

  ngOnInit(){
    this.isDesktop = this.screenSizeService.isDesktop();
  }
}
