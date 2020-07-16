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
this.taskService.add(this.task).subscribe(
  resp=>{
    alert(resp)
  }
);
}

}
