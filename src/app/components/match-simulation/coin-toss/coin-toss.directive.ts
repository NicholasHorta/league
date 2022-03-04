import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatchSetupService } from 'src/app/services/match-setup.service';
@Directive({
  selector: '[CoinToss]'
})
export class CoinTossDirective {

  constructor(private matchSetupSVC: MatchSetupService, private viewContRef: ViewContainerRef, private templateRef: TemplateRef<HTMLDivElement>) { }

  


}
