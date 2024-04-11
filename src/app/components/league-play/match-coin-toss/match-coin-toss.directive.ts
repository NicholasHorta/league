import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatchPropertiesService } from 'src/app/services/match-properties.service';
import Util from 'src/app/utils/utilities';

class ExtendedModalProperties {
  constructor(private matchPropertiesSVC: MatchPropertiesService) { }
  public matchProperties = this.matchPropertiesSVC.completedMatchProperties;
  public tossInit = false;
  public coinTossWinners: string[] = [];
  public message = "Flip the coin to see who begins the game with possession advantage!";
  public winnerAssigned = false;
  public closeModal = false;
  public returnIndexValue = () => Util.returnRandomValueFromArg(2);
  public flipCoin = () => {
    this.tossInit = true;
    this.winnerAssigned = true;
    const process = setTimeout(() => {
      this.coinTossWinners.push(this.matchProperties.teamSetOne[this.returnIndexValue()]);
      this.tossInit = false;
      clearTimeout(process);
    }, 1000);
    const close = setTimeout(() => {
      this.closeModal = true;
      this.matchProperties.abandonIfNavigateAway = true;
      this.matchPropertiesSVC.setPossessionHolderHandler(this.coinTossWinners);
      clearTimeout(close);
    }, 2000);
  };
};

@Directive({
  selector: '[MatchCoinToss]'
})

export class MatchCoinTossDirective {

  constructor(private matchPropertiesSVC: MatchPropertiesService, private viewContRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  @Input('MatchCoinToss') coinTossModal = null;
  private modalProps = new ExtendedModalProperties(this.matchPropertiesSVC);

  ngOnInit() {
    this.viewContRef.createEmbeddedView(this.templateRef, this.modalProps);
    window.scrollTo(0, 0);
  };

  ngDoCheck() {
    this.modalProps.closeModal ? this.viewContRef.clear() : null;
  };
}
