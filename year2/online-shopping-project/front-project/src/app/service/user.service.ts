import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:string='';

  loadLastUsers() {
    let usersString:string=localStorage.getItem('users'); 
    let users:User[]=JSON.parse(usersString);
    this.users=users;
  }
users:User[]=[];
username:string='';
  constructor(private http:HttpClient) {
let bestUser:User=new User();
bestUser.username='ismayil';
bestUser.password='1234';
this.users.push(bestUser);

let usersString:string=localStorage.getItem('users'); 
if(!usersString){
let users:User[]=[];
localStorage.setItem('users',JSON.stringify(users));
} 

 this.loadLastUsers();
  

   }


   createUser(u:User){
return this.http.post<boolean>(`${API_URL}/users`,u);
   }

   checkUser(username:string){
    return this.http.get<boolean>(`${API_URL}/users/check/${username}`);
       }

}
