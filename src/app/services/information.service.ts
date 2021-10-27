import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserNotifications } from '../components/dashboard/user-notifications';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http:HttpClient) { }

  url="http://localhost:7070";

    // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  homeInfo(homeinfo:any) {
    return this.http.get<any>(this.url + '/information/home', this.httpOptions);
  }

  userInfo(userinfo:any): Observable<UserNotifications[]> {
    console.log('call dashboard on user info api call ==> ' + userinfo + ' <=========');
    return this.http.get<any>(this.url + '/information/user/'+userinfo, this.httpOptions);
  }
}
