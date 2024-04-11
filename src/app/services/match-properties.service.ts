import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class MatchPropertiesService {
  completedMatchProperties: any;

  setMatchPropertiesHandler(matchProps: any) {
    this.completedMatchProperties = matchProps;
  };

  setPossessionHolderHandler(possessionHolders: string[]) {
    this.completedMatchProperties.coinTossWinners = possessionHolders;
    this.completedMatchProperties.possessionIndexMatchOne = this.completedMatchProperties.teamSetOne
      .indexOf(
        possessionHolders[0]
      );
  };
}
