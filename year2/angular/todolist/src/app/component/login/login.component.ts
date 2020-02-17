import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private matDialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
  }
  login() {
    let userValidated: boolean = false;
    for (let index = 0; index < this.userService.users.length; index++) {
      const u = this.userService.users[index];
      if (u.username == this.username && u.password == this.password) {
        userValidated = true; break;
      }
    }
    if (userValidated) {
      this.loginService.username = this.username;
    } else {
      alert('invalid credentials');
    }

  }

  onSignup() {
    this.matDialog.open(SignupComponent);
  }
}
