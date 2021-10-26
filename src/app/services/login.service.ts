import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:7070";

  constructor(private http:HttpClient) {  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  generateToken(credentials:any) {
    //token generate
    //console.log("JSON.stringify(credentials)" + JSON.stringify(credentials));
    //let token = this.http.post<any>(this.url + '/ticket/token', JSON.stringify(credentials), this.httpOptions);
    //let token = this.http.post(`${this.url}/ticket/token`, JSON.stringify(credentials));
    //console.log(token);
    return this.http.post<any>(this.url + '/ticket/token', JSON.stringify(credentials), this.httpOptions);
  }



  //login the user
  loginUser(token:any) {
    localStorage.setItem("token", token);
    return true;
  }

  //For checking is user logged in or not
  isLoggedIn() {
    let token = localStorage.getItem("token");

    if(token == undefined || token == '' || token == null) {
      return false;
    }

    return true;
  }

  //For logout user
  logout() {
    localStorage.removeItem("token");
    return true;
  }

  //Get token for user
  getToken() {
    return localStorage.getItem("token");
  }
}
