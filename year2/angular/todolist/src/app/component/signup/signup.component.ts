import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:User=new User();
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  onSignup(){
    let userAlreadyExist:boolean=false;
    for (let index = 0; index < this.userService.users.length; index++) {
      const user = this.userService.users[index];
      if(user.username==this.user.username){
        userAlreadyExist=true; break;
      }
    }
    if(userAlreadyExist){
alert('this user already exist')
    }else{
      this.userService.users.push(this.user);
    }


  }
}
