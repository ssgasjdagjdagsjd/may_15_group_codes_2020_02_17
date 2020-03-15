import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loadLastUsers() {
    let usersString:string=localStorage.getItem('users'); 
    let users:User[]=JSON.parse(usersString);
    this.users=users;
  }
users:User[]=[];
username:string='';
  constructor() {
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
}
