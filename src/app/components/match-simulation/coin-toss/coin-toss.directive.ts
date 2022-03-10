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
    this.loading = true;
    if (this.fourTeams) {
      // 4 team line ups remain the same on every instance
      // So to ensure we assign from the right pool of 2, we draw off 0/1, then 0 + 2 = team[2] /1 + 2 = team[3] 
      const teamOne = this.availableTeams[Math.floor(Math.random() * 2)];
      const teamTwo = this.availableTeams[Math.floor(Math.random() * 2 + 2)];
      this.result.push(teamOne), this.result.push(teamTwo);
    } else {
      this.result.push(this.availableTeams[Math.floor(Math.random() * this.matchSetupSVC.generatedTeamsArray.length)]);
    }
    this.matchSimSVC.advantagePossessionTeams  = this.result;
    const initloading = setInterval(() => {
      this.loading = false;
      clearInterval(initloading);
    }, 250)
    // }, 2000)
    const initCloseModal = setInterval(() => {
      this.closeModal = true;
      clearInterval(initCloseModal);
    }, 500)
    // }, 5000)
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
