import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatchSetupComponent } from './components/match-setup/match-setup.component';
import { MatchTypeComponent } from './components/match-setup/match-type/match-type.component';
import { MatchTeamsDisplayComponent } from './components/match-setup/match-teams-display/match-teams-display.component';

@NgModule({
  declarations: [
    AppComponent,
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
