import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';
import { Task } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Task[]> (`${API_URL}/tasks`);
  }add(task:Task){
    return this.http.post<number> (`${API_URL}/tasks`,task);
  }



  delete(id:number){
    return this.http.delete  (`${API_URL}/tasks/${id}` );
  }


}
