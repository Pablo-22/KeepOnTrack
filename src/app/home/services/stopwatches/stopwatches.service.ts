import { Injectable } from '@angular/core';
import { Cronometer } from 'src/app/model/cronometer/cronometer';

@Injectable({
  providedIn: 'root'
})
export class StopwatchesService {

  stopwatchesArray: Cronometer[] = [];

  constructor() {
    this.loadCronometersFromLocalStorage();
  }

  deleteCronometer(id:string){
    this.stopwatchesArray = this.stopwatchesArray?.filter(item => item.id !== id);
  }

  addStopwatch(){
    let newCronometer = new Cronometer();

    this.stopwatchesArray.push(newCronometer);
  }

  saveCronometersToLocalStorage(){
    localStorage.setItem("cronometers", JSON.stringify(this.stopwatchesArray));
  }

  loadCronometersFromLocalStorage(){
    let localStorageData = localStorage.getItem("cronometers") || '';
    if (localStorageData) {
      this.stopwatchesArray = JSON.parse(localStorageData) as Cronometer[]; 
    }
  }
}


