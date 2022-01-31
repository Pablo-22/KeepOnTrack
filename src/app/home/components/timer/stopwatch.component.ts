import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cronometer } from 'src/app/model/cronometer/cronometer';
import { TimersDeckComponent } from '../../pages/timers-deck/timers-deck.component';
import { StopwatchesService } from '../../services/stopwatches/stopwatches.service';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  @Input()
  cronometer:Cronometer = new Cronometer();

  chronometerCall:any;

  @Input()
  deleteCallback:any;

  @Output() onDeleteEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {

  }

  onTitleChange($event:any) {
    this.cronometer.title = $event.target.outerText;
  }

  incrementTime(){
    this.cronometer.isStarted = true;

    this.cronometer.seconds++;

    if (this.cronometer.seconds > 60) {
      this.cronometer.seconds = 0;
      this.cronometer.minutes++;
    }

    if (this.cronometer.minutes > 60) {
      this.cronometer.hours++;
    }

    this.cronometer.timeOutputString = `${this.cronometer.hours}:${this.cronometer.minutes}:${this.cronometer.hours}`;
  }

  onPlay(){

    if(!this.cronometer.isStarted){

      this.chronometerCall = setInterval(() =>{
        this.cronometer.isStarted = true;
        
        this.cronometer.seconds++;
        
        if (this.cronometer.seconds > 60) {
          this.cronometer.seconds = 0;
          this.cronometer.minutes++;
        }
        
        if (this.cronometer.minutes > 60) {
          this.cronometer.seconds = 0;
          this.cronometer.minutes = 0;
          this.cronometer.hours++;
        }
        
        this.cronometer.timeOutputString = `${this.cronometer.hours.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false})
        
        }:${this.cronometer.minutes.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false})
        
        }:${this.cronometer.seconds.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false})
        
        }`;
      }, 1000);
    }
  }

  onPause(){
    if(this.chronometerCall){
      clearInterval(this.chronometerCall);
      this.cronometer.isStarted = false;
    }
  }

  onReset(){
    this.onPause();

    this.cronometer.timeOutputString = '00:00:00';
    this.cronometer.seconds = 0;
    this.cronometer.minutes = 0;
    this.cronometer.hours = 0;
    this.cronometer.isStarted = false;
  }

  onDelete(){
    this.onDeleteEvent.emit(this.cronometer.id);
  }
}
