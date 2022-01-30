import { Component, OnInit } from '@angular/core';
import { Cronometer } from 'src/app/model/cronometer/cronometer';

@Component({
  templateUrl: './timers-deck.component.html',
  styleUrls: ['./timers-deck.component.css']
})
export class TimersDeckComponent implements OnInit {

  stopwatchesArray: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addStopwatch(){
    let newTime = 1;

    this.stopwatchesArray.push(newTime);
  }
}
