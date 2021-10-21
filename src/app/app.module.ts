import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneVOneComponent } from './components/one-v-one/one-v-one.component';
import { AllFourComponent } from './components/all-four/all-four.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatchSetupComponent } from './components/match-setup/match-setup.component';
import { MatchTypeComponent } from './components/match-setup/match-type/match-type.component';
import { MatchTeamsDisplayComponent } from './components/match-setup/match-teams-display/match-teams-display.component';

@NgModule({
  declarations: [
    AppComponent,
    OneVOneComponent,
    AllFourComponent,
    NavbarComponent,
    MatchSetupComponent,
    MatchTypeComponent,
    MatchTeamsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
