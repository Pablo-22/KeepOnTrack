import { DataEntity } from "../data-entity/data-entity";

export class Time extends DataEntity {
    timeOutputString:string;
    seconds:number;
    minutes:number;
    hours:number;
    isStarted:boolean;

    constructor(){
        super(); 
          
        this.timeOutputString = '00:00:00';
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.isStarted = false;
    }
}
