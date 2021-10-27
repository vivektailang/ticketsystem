import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  credentials={
    username:'',
    password:''
  }

  onSubmit() {

     if((this.credentials.username != '' && this.credentials.password != '')
     &&
     (this.credentials.username != null && this.credentials.password != null)) {
       this.loginService.generateToken(this.credentials).subscribe(
          (response:any)=>{
            this.loginService.loginUser(response.token, this.credentials.username);
            window.location.href="/dashboard";
          },
          error=>{
            console.log("Error = " + error.message);
          }
       )
     } else {
       console.log("Please provide username and password.");
     }

  }

  ngOnInit(): void {
  }

}
