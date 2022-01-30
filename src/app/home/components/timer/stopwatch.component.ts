import { Component, Input, OnInit } from '@angular/core';
import { Time } from 'src/app/model/time/time';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  @Input()
  title:string = 'Título';

  time:Time;

  constructor() {
    this.time = new Time();
  }

  ngOnInit(): void {
  }

  onTitleChange($event:any) {
    this.title = $event.target.outerText;
  }

  cronometerCall(){
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
    let chronometerCall = setInterval(this.cronometerCall, 1000);
  }
}
