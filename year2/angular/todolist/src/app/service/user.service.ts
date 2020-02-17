import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users:User[]=[];
  constructor() {
let bestUser:User=new User();
bestUser.username='ismayil';
bestUser.password='1234';
this.users.push(bestUser);

   }
}
