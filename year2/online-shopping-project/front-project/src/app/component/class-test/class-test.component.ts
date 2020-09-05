import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-class-test',
  templateUrl: './class-test.component.html',
  styleUrls: ['./class-test.component.css']
})
export class ClassTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  createObject() {
    let task: Task = new Task(3);
    task.todo = 'learn css';
    task.day = 14;
    task.register = new Date();
    task.status = 'not done';

    console.log(task);
  }
}

