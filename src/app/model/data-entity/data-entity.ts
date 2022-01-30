import * as uuid from 'uuid';

export class DataEntity {
    public id:string;
    constructor(){
        this.id = uuid.v4();
    }
 }
