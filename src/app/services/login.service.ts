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

  loggedUserInfo={
    username:'',
    password:''
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  generateToken(credentials:any) {
    return this.http.post<any>(this.url + '/login/token', JSON.stringify(credentials), this.httpOptions);
  }

  //login the user
  loginUser(token:any, username:any) {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
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
    localStorage.removeItem("username");
    return true;
  }

  //Get token for user
  getToken() {
    return localStorage.getItem("token");
  }

  getUsername():any {
    return localStorage.getItem("username");
  }
}
