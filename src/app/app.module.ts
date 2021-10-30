import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatchSetupComponent } from './components/match-setup/match-setup.component';
import { MatchTypeSelectComponent } from './components/match-setup/match-type-select/match-type-select.component';
import { MatchTeamsDisplayComponent } from './components/match-setup/match-teams-display/match-teams-display.component';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatchSetupComponent,
    MatchTypeSelectComponent,
    MatchTeamsDisplayComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
