import { DataEntity } from "../data-entity/data-entity";

export class Cronometer extends DataEntity {
    title:string;
    timeOutputString:string;
    seconds:number;
    minutes:number;
    hours:number;
    isStarted:boolean;

    constructor(){
        super(); 

        this.title = 'Title';
        this.timeOutputString = '00:00:00';
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.isStarted = false;
    }
}
