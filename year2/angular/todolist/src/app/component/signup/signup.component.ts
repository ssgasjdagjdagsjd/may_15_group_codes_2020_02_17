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
    this.userService.checkUser(this.user.username).subscribe(
      resp=>{
        if(resp){
alert('exists');
        }else{
          this.userService.createUser(this.user).subscribe(
            resp=>{
              alert(resp);
            }
          );
        }
      }
    );
  }
}
