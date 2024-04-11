import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguePlayComponent } from './components/league-play/league-play.component';
import { PlayInitiatorResolver } from './resolvers/play-initiator.resolver';
import { LeagueSetupComponent } from './components/league-setup/league-setup.component';

const routes: Routes = [
  {path: '', redirectTo: 'league-setup', pathMatch: 'full'},
  {path: 'league-setup', component: LeagueSetupComponent},
  {path: 'league-play', component: LeaguePlayComponent, resolve: [PlayInitiatorResolver]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
