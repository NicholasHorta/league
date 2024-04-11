import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatchPropertiesService } from 'src/app/services/match-properties.service';

@Injectable({
  providedIn: 'root'
})
export class PlayInitiatorResolver implements Resolve<boolean> {
  constructor(private matchPropertiesSVC: MatchPropertiesService, private router: Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if(!this.matchPropertiesSVC.completedMatchProperties){
      this.router.navigate(['']);
    }
    return of(true);
  }
}
