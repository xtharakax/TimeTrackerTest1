import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-time-tracker-cards',
  templateUrl: './time-tracker-cards.component.html',
  styleUrls: ['./time-tracker-cards.component.scss']
})
export class TimeTrackerCardsComponent implements OnInit {

  tasks =[];

  constructor(private data : DataService) { }

  ngOnInit() {
  }

  getTasks(){
    this.tasks = this.data.getTasks();
  }

  removeTask(code:string){
    this.data.removeTask(code);
  }

}
