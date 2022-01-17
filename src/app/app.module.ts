import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatchSetupComponent } from './components/match-setup/match-setup.component';
import { MatchTypeSelectComponent } from './components/match-setup/match-type-select/match-type-select.component';
import { MatchTeamsDisplayComponent } from './components/match-setup/match-teams-display/match-teams-display.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { FormationComponent } from './components/match-setup/match-teams-display/formation/formation.component';
import { MatchSimulationComponent } from './components/match-simulation/match-simulation.component';
import { QuickMatchSimComponent } from './components/match-simulation/quick-match-sim/quick-match-sim.component';
import { CupRunSimComponent } from './components/match-simulation/cup-run-sim/cup-run-sim.component';
import { SimResultsComponent } from './components/match-simulation/sim-results/sim-results.component';
import { IntroductionsComponent } from './components/match-simulation/introductions/introductions.component';
import { RefreshResolver } from './services/refresh.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatchSetupComponent,
    MatchTypeSelectComponent,
    MatchTeamsDisplayComponent,
    MyDirectiveDirective,
    FormationComponent,
    MatchSimulationComponent,
    QuickMatchSimComponent,
    CupRunSimComponent,
    SimResultsComponent,
    IntroductionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RefreshResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
