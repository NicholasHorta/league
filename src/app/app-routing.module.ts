import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchSetupComponent } from './components/match-setup/match-setup.component';
import { MatchSimulationComponent } from './components/match-simulation/match-simulation.component';
import { RefreshResolver } from './services/refresh.resolver';


const routes: Routes = [
  {path: '', redirectTo: 'league-setup', pathMatch: 'full'},
  {path: 'league-setup', component: MatchSetupComponent},
  {path: 'league-play', component: MatchSimulationComponent, resolve: {RefreshResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
