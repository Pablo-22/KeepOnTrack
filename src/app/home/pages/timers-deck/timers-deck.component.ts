import { Component, OnInit } from '@angular/core';
import { Cronometer } from 'src/app/model/cronometer/cronometer';
import { StopwatchesService } from '../../services/stopwatches/stopwatches.service';

@Component({
  templateUrl: './timers-deck.component.html',
  styleUrls: ['./timers-deck.component.css']
})
export class TimersDeckComponent implements OnInit {

  stopwatchesArray:Cronometer[] = [];

  constructor(private _stopwatchesService:StopwatchesService) {
    this.stopwatchesArray = _stopwatchesService.stopwatchesArray;
  }

  ngOnInit(): void {
    
  }

  addStopwatch(){
    this._stopwatchesService.addStopwatch();
  }

  deleteCronometer(id:string){
    this._stopwatchesService.deleteCronometer(id);
    this.stopwatchesArray = this._stopwatchesService.stopwatchesArray;
  }

  saveCronometers(){
    this._stopwatchesService.saveCronometersToLocalStorage();
  }
}
