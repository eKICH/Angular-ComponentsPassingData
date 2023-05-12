import { EventEmitter } from "@angular/core";

export class DataService {

    //Customer Event Emitter
    dataEmitter = new EventEmitter<string>();

    //Method to raise the dataEmitter event
    raiseDataEmitterEvent(val: string) {
        this.dataEmitter.emit(val);
    }
}