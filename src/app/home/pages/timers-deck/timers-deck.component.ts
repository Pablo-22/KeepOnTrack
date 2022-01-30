import { Component, OnInit } from '@angular/core';
import { Cronometer } from 'src/app/model/cronometer/cronometer';
import { StopwatchesService } from '../../services/stopwatches/stopwatches.service';

@Component({
  templateUrl: './timers-deck.component.html',
  styleUrls: ['./timers-deck.component.css']
})
export class TimersDeckComponent implements OnInit {

  constructor(private stopwatchesService:StopwatchesService) { }

  ngOnInit(): void {
  }

  addStopwatch(){
    let newCronometer = new Cronometer();

    this.stopwatchesArray.push(newCronometer);
  }
}
