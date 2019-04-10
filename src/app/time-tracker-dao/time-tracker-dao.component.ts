import { Component, OnInit } from '@angular/core';

export class TimeTrackerDaoComponent implements OnInit {

    constructor() { }

  ngOnInit() {
  }

    tasks = []

    addTasks(taskDesc: string) {
        this.tasks.push({ name: taskDesc });
        console.log(taskDesc);
    }

    test(){
        console.log("here");
    }
}