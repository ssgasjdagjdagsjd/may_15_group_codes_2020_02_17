import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService:LoginService,private userService:UserService,private r:Router) { }

  ngOnInit() {
    this.loginService.username='';
    this.userService.token='';
this.r.navigate(['login']);
  }

}
