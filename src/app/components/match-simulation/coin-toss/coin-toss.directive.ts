import { Directive, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatchSetupService } from 'src/app/services/match-setup.service';

class AdditionalProperties {
  constructor(private matchSetupSVC: MatchSetupService){}
  public availableTeams = this.matchSetupSVC.generatedTeamsArray;
}
@Directive({
  selector: '[coinToss]'
})


export class CoinTossDirective implements OnInit {

  constructor(private matchSetupSVC: MatchSetupService,private viewContRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }
  @Input('coinToss') coinTossImplemented = true; 
  private props = new AdditionalProperties(this.matchSetupSVC);

  ngOnInit(){
    
    this.viewContRef.createEmbeddedView(this.templateRef, this.props);

  }


}
