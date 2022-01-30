import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimersDeckComponent } from './home/pages/timers-deck/timers-deck.component';
import { StopwatchComponent } from './home/components/timer/stopwatch.component';

@NgModule({
  declarations: [
    AppComponent,
    TimersDeckComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
