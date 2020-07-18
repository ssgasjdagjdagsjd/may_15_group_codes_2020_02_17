import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/model/models';
import { MatDialog } from '@angular/material';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks:Task[]=[];
  constructor(private taskS:TaskService,private matDialog:MatDialog) { }

  ngOnInit() {
   this.loadTasks();
  }
  loadTasks() {
    this.taskS.findAll().subscribe(
      resp=>{
        this.tasks=resp;
      }
    );
  }
  onAddTask(){
    let addDialog= this.matDialog.open(AddTaskComponent);
    addDialog.afterClosed().subscribe(
      resp=>{
        this.loadTasks();
      }
    );
  }

  delete(task:Task){
    this.taskS.delete(task.id).subscribe(
      resp=>{
        this.taskS.findAll().subscribe(
          resp=>{
            this.tasks=resp;
          }
        );
      }
    );
  }
}
