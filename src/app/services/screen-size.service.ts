import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class ScreenSizeService {

  isDesktop(){
    return window.innerWidth >= 920;
  }
}

