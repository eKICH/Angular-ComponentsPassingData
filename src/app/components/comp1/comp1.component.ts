import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  textEntered!: string;

  constructor(private dataService: DataService){}

  //Method will be called when the button is clicked
  onClickMe(){
    //textEntered in the text box is assigned to the event method in the service
    this.dataService.raiseDataEmitterEvent(this.textEntered);
  }
}
