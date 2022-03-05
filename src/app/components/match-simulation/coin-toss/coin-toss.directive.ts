import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatchSetupService } from 'src/app/services/match-setup.service';

class AdditionalProperties {
  constructor(private matchSetupSVC: MatchSetupService) { }
  public availableTeams = this.matchSetupSVC.generatedTeamsArray;
  public message = "Flip the coin to see who beggins the game with the advantage of possession.";
  public result = '';
  public closeModal = false;
  public runCoinToss = () => {
    this.result = this.availableTeams[Math.floor(Math.random() * this.matchSetupSVC.generatedTeamsArray.length)];
    const initCloseModal = setInterval(() => {
      this.closeModal = true;
      clearInterval(initCloseModal);
    }, 3000)
  }
}
@Directive({
  selector: '[coinToss]'
})

export class CoinTossDirective implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService, private viewContRef: ViewContainerRef, private templateRef: TemplateRef<any>, private elemRef: ElementRef) { }
  @Input('coinToss') coinTossImplemented = false;
  private props = new AdditionalProperties(this.matchSetupSVC);

  ngOnInit() {
    this.viewContRef.createEmbeddedView(this.templateRef, this.props);
  }

  ngDoCheck() {
    this.props.closeModal ? this.viewContRef.clear() : null;
  }

}
