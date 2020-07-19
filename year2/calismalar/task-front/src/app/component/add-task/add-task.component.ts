import { Component, OnInit, Inject } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task, ModeModel } from 'src/app/model/models';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
task:Task=new Task();

  constructor(private taskService:TaskService,@Inject(MAT_DIALOG_DATA) public data: ModeModel) { }
mode:string='add';
  ngOnInit() {
this.mode=this.data.mode;
if(this.mode=='update'){
  this.taskService.findById(this.data.taskId).subscribe(
    resp=>{
      this.task=resp;
    }
  );
}
  }

onAddTask(){
  if(confirm("Qeydiyyat etməyə əminsiniz?")) {
    
   
  if(this.task.day>100){
    this.task.day=100;

  }if(this.task.day<0){
    this.task.day=0;
    
  }
if(this.mode=='add'){this.taskService.add(this.task).subscribe(
  resp=>{
    alert(resp)
  }
);}else{
  this.taskService.update(this.task).subscribe(
    resp=>{
      alert('ugurlu redakte');
    }
  );
}
  }
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
