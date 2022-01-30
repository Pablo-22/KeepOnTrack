import { Injectable } from '@angular/core';
import { Cronometer } from 'src/app/model/cronometer/cronometer';

@Injectable({
  providedIn: 'root'
})
export class StopwatchesService {

  stopwatchesArray: Cronometer[] = [];

  constructor() { }

  deleteCronometer(id:string){
    this.stopwatchesArray?.filter(item => item.id !== id);
  }

  addStopwatch(){
    let newCronometer = new Cronometer();

    this.stopwatchesArray.push(newCronometer);
  }
}


