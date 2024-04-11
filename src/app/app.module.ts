import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatchSelectButtonsComponent } from './components/league-setup/match-select-buttons/match-select-buttons.component';
import { MatchFixturesComponent } from './components/league-setup/match-fixtures/match-fixtures.component';
import { MatchSetupHelpComponent } from './components/league-setup/match-setup-help/match-setup-help.component';
import { MatchTeamsDisplayComponent } from './components/league-setup/match-teams-display/match-teams-display.component';
import { TeamFormationComponent } from './components/league-setup/match-teams-display/team-formation/team-formation.component';
import { LeagueSetupComponent } from './components/league-setup/league-setup.component';
import { HeaderComponent } from './components/league-global/header/header.component';
import { FooterComponent } from './components/league-global/footer/footer.component';
import { MatchSetupCompleteComponent } from './components/league-setup/match-setup-complete/match-setup-complete.component';
import { MatchPreCommentaryComponent } from './components/league-play/match-pre-commentary/match-pre-commentary.component';
import { LeaguePlayComponent } from './components/league-play/league-play.component';
import { MatchCoinTossComponent } from './components/league-play/match-coin-toss/match-coin-toss.component';
import { MatchCoinTossDirective } from './components/league-play/match-coin-toss/match-coin-toss.directive';
import { MatchOneVOneComponent } from './components/league-play/match-one-v-one/match-one-v-one.component';
import { OneVOneStatsComponent } from './components/league-play/match-one-v-one/one-v-one-stats/one-v-one-stats.component';
import { PercentageToPipe } from './pipes/percentageTo.pipe';
import { OneVOneTeamOneComponent } from './components/league-play/match-one-v-one/one-v-one-team-one/one-v-one-team-one.component';
import { OneVOneTeamOneSubsComponent } from './components/league-play/match-one-v-one/one-v-one-team-one-subs/one-v-one-team-one-subs.component';
import { OneVOneTeamTwoSubsComponent } from './components/league-play/match-one-v-one/one-v-one-team-two-subs/one-v-one-team-two-subs.component';
import { OneVOneTeamTwoComponent } from './components/league-play/match-one-v-one/one-v-one-team-two/one-v-one-team-two.component';
import { MobileMessageComponent } from './components/mobile-message/mobile-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchSelectButtonsComponent,
    MatchFixturesComponent,
    MatchSetupHelpComponent,
    MatchTeamsDisplayComponent,
    TeamFormationComponent,
    LeagueSetupComponent,
    HeaderComponent,
    FooterComponent,
    MatchSetupCompleteComponent,
    MatchPreCommentaryComponent,
    LeaguePlayComponent,
    MatchCoinTossComponent,
    MatchCoinTossDirective,
    MatchOneVOneComponent,
    OneVOneStatsComponent,
    PercentageToPipe,
    OneVOneTeamOneComponent,
    OneVOneTeamOneSubsComponent,
    OneVOneTeamTwoSubsComponent,
    OneVOneTeamTwoComponent,
    MobileMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
