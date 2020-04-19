import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';
import { UserService } from 'src/app/service/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private matDialog: MatDialog, private userService: UserService,private http:HttpClient) { }

  ngOnInit() {
  }
  login() {
    
this.http.get(`${API_URL}/users/validate`,{
  headers:new HttpHeaders({
    Authorization:'Basic '+window.btoa(this.username+':'+this.password)
  })
}).subscribe(
  resp=>{
    this.userService.token='Basic '+window.btoa(this.username+':'+this.password);
    this.loginService.username = this.username;
  },error=>{
    alert('invalid credentials');
  }
);

  }

  onSignup() {
    this.matDialog.open(SignupComponent);
  }
}
