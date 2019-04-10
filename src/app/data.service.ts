import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { exists } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks = [];

  constructor(private client: HttpClient) { }

  getTasks() {
    return this.tasks;
  }

  addTask(task){
    this.tasks.push({desc:task.desc,code:task.desc});
    console.log(this.tasks);
    return this.client.post("https://jsonplaceholder.typicode.com/posts/",task)
  }

  removeTask(task){

    var i =0;

    this.tasks.forEach(element => {
      var index = this.tasks[i]["desc"].indexOf(task);     
      if(index!=-1){
        console.log(this.tasks[i]["desc"]+"--"+i);
        this.tasks.splice(i,1);
        return
      }
      i++;
    });
    

  }
}
