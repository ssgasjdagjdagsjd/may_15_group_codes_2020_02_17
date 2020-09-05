import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindable',
  templateUrl: './bindable.component.html',
  styleUrls: ['./bindable.component.css']
})
export class BindableComponent implements OnInit {
name:string='Əli';
show:boolean=true;
sekilim:string='https://learndevwithjava.com:8443/rmprod/filedownload/files/fri.jpg';
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.show=false;
    }, 3044400);
  }
  sayHello(){
    alert('Hello : '+this.name);
    this.show=false;
  }

  sekiliDeyis(){
    this.sekilim='https://learndevwithjava.com:8443/rmprod/filedownload/files/kendsayagi_kartof.jpg';
  }
  
}
