import { Component, Input, OnInit } from '@angular/core';
import { Cronometer } from 'src/app/model/cronometer/cronometer';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  @Input()
  time:Cronometer = new Cronometer();

  title:string = 'Título';


  constructor() {
  }

  ngOnInit(): void {
  }

  onTitleChange($event:any) {
    this.title = $event.target.outerText;
  }

  incrementTime(){
    this.time.isStarted = true;

    this.time.seconds++;

    if (this.time.seconds > 60) {
      this.time.seconds = 0;
      this.time.minutes++;
    }

    if (this.time.minutes > 60) {
      this.time.hours++;
    }

    this.time.timeOutputString = `${this.time.hours}:${this.time.minutes}:${this.time.hours}`;
  }

  onPlay(){
    let chronometerCall = setInterval(this.incrementTime, 1000);
  }
}
