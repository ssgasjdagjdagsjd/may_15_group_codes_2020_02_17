import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn(): boolean {
    let result: boolean = false;
    if (this.loginService.username == '') {
      result = false;
    } else {
      result = true;
    }
    return result;
  }
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
