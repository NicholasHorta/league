import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatchSetupService } from 'src/app/services/match-setup.service';
import { MatchSimulationService } from 'src/app/services/match-simulation.service';

class AdditionalProperties {
  constructor(private matchSetupSVC: MatchSetupService, private matchSimSVC: MatchSimulationService) { }
  public availableTeams = [...this.matchSetupSVC.generatedTeamsArray];
  public message = "Flip the coin to see who beggins the game with the advantage of possession.";
  public fourTeams = this.availableTeams.length === 4 ? true : false;
  public result: string[] = [];
  public closeModal = false;
  public loading = false;
  public runCoinToss = () => {
    console.log('%ccoin-toss.directive.ts line:19 this.availableTeams', 'color: #bada55;', this.availableTeams);
    console.log('%ccoin-toss.directive.ts line:19 this.availableTeams', 'color: #b00b13;', this.matchSetupSVC.generatedTeamsArray);
    this.loading = true;
    if (this.fourTeams) {
      const teamOne = this.availableTeams.splice(Math.floor(Math.random() * this.matchSetupSVC.generatedTeamsArray.length), 1);
      this.result.push(...teamOne);
      const teamTwo = this.availableTeams.splice(Math.floor(Math.random() * this.matchSetupSVC.generatedTeamsArray.length), 1);
      this.result.push(...teamTwo);
      console.log('%ccoin-toss.directive.ts line:19 this.availableTeams', 'color: #007acc;', this.result);
    } else {
      this.result.push(this.availableTeams[Math.floor(Math.random() * this.matchSetupSVC.generatedTeamsArray.length)]);
      console.log('%ccoin-toss.directive.ts line:23 this.availableTeams', 'color: #007acc;', this.availableTeams);
      console.log('%ccoin-toss.directive.ts line:23 this.availableTeams', 'color: #007acc;', this.result);
    }
    this.matchSimSVC.advantagePossessionTeams  = this.result;
    const initloading = setInterval(() => {
      this.loading = false;
      clearInterval(initloading);
    }, 2000)
    const initCloseModal = setInterval(() => {
      this.closeModal = true;
      clearInterval(initCloseModal);
    }, 5000)
  }
  
}

@Directive({
  selector: '[coinToss]'
})

export class CoinTossDirective implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService, private matchSimSVC: MatchSimulationService, private viewContRef: ViewContainerRef, private templateRef: TemplateRef<any>, private elemRef: ElementRef) { }
  @Input('coinToss') coinTossImplemented = false;
  private props = new AdditionalProperties(this.matchSetupSVC, this.matchSimSVC);

  ngOnInit() {
    this.viewContRef.createEmbeddedView(this.templateRef, this.props)
    console.log(this.matchSetupSVC.generatedTeamsArray);
  }

  ngDoCheck() {
    this.props.closeModal ? this.viewContRef.clear() : null;
  }

}
