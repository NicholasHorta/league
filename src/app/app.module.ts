import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatchSetupComponent } from './components/match-setup/match-setup.component';
import { MatchTypeSelectComponent } from './components/match-setup/match-type-select/match-type-select.component';
import { MatchTeamsDisplayComponent } from './components/match-setup/match-teams-display/match-teams-display.component';
import { FormationComponent } from './components/match-setup/match-teams-display/formation/formation.component';
import { MatchSimulationComponent } from './components/match-simulation/match-simulation.component';
import { QuickMatchSimComponent } from './components/match-simulation/quick-match-sim/quick-match-sim.component';
import { CupRunSimComponent } from './components/match-simulation/cup-run-sim/cup-run-sim.component';
import { IntroductionsComponent } from './components/match-simulation/introductions/introductions.component';
import { RefreshResolver } from './services/refresh.resolver';
import { GuideComponent } from './components/match-setup/guide/guide.component';
import { CupRunStatsComponent } from './components/match-simulation/cup-run-sim/cup-run-stats/cup-run-stats.component';
import { QuickMatchStatsComponent } from './components/match-simulation/quick-match-sim/quick-match-stats/quick-match-stats.component';
import { CoinTossDirective } from './components/match-simulation/coin-toss/coin-toss.directive';
import { CoinTossComponent } from './components/match-simulation/coin-toss/coin-toss.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatchSetupComponent,
    MatchTypeSelectComponent,
    MatchTeamsDisplayComponent,
    FormationComponent,
    MatchSimulationComponent,
    QuickMatchSimComponent,
    CupRunSimComponent,
    IntroductionsComponent,
    GuideComponent,
    CupRunStatsComponent,
    QuickMatchStatsComponent,
    CoinTossDirective,
    CoinTossComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RefreshResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
