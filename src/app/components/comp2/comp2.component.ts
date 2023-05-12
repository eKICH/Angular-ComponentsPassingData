import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{

  youEntered!: string;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
      //Subscribe to the event and assign the property youEntered to the data received from the textbox
      this.dataService.dataEmitter.subscribe((data) => {
        this.youEntered = data;
      });
  }
}
