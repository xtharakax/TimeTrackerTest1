import { Component, OnInit,Input} from '@angular/core';
import { NgModel } from '@angular/forms';
import { DataService } from '../data.service';
import {TimeTrackerCardsComponent} from '../time-tracker-cards/time-tracker-cards.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-time-tracker-form',
  templateUrl: './time-tracker-form.component.html',
  styleUrls: ['./time-tracker-form.component.scss']
})


export class TimeTrackerFormComponent implements OnInit {
 
  task = {
    code:"",
    desc:""
  }

  @Input() timeCardComponent : TimeTrackerCardsComponent;

  constructor(private data : DataService) {
    
   }

  ngOnInit() {
  }

  onSubmit(){
   
    this.data.addTask(this.task);
    this.timeCardComponent.getTasks();
    this.task.code="";
    this.task.desc="";
  }

 
}
