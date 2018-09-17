import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', loadChildren: './modules/intro/intro.module#IntroModule' },
  { path: 'game', loadChildren: './modules/game/game.module#GameModule' },
  { path: 'history', loadChildren: './modules/history/history.module#HistoryModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
