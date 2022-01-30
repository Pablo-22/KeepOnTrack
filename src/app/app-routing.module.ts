import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimersDeckComponent } from './home/pages/timers-deck/timers-deck.component';

const routes: Routes = [
  { path: '', component: TimersDeckComponent },
  { path: 'timers-deck', component: TimersDeckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
