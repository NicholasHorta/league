import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatchSetupService } from './match-setup.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshResolver implements Resolve<any> {

  constructor(private matchSetupSVC: MatchSetupService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.matchSetupSVC.generatedTeamsArray.length === 0){
      window.alert('Page Reloading: You will now be returned to the setup page.')
      location.href = '/';
    }
  }
}
