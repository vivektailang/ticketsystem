import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  onSubmit() {

     if((this.credentials.username != '' && this.credentials.password != '')
     &&
     (this.credentials.username != null && this.credentials.password != null)) {
       //console.log("username: " + this.credentials.username);
       //console.log("password: " + this.credentials.password);


     } else {
       console.log("Please provide username and password.");
     }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
