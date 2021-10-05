import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MatchSetupService {

  matchTypeValue: number = 2;

  matchTypeHandler(type: number){
    this.matchTypeValue = type;
    return this.matchTypeValue
  }

}
