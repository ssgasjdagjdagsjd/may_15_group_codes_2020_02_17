import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/model/models';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
task:Task=new Task();

  constructor(private taskService:TaskService) { }

  ngOnInit() {
  }

onAddTask(){

  if(this.task.day>100){
    this.task.day=100;

  }if(this.task.day<0){
    this.task.day=0;
    
  }

this.taskService.add(this.task).subscribe(
  resp=>{
    alert(resp)
  }
);
}
getDayValid(day:number){
  let result:boolean=false;

if(day>100 || day<0){
  result=false;
}else{
  result=true;
}

  return result;
}


taskDayChanged(day:number){
  if(day>100){
    this.task.day=100;

  }if(day<0){
    this.task.day=0;
    
  }
}
}
