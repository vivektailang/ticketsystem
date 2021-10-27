import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Ticket } from '../components/ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url="http://localhost:7070";

  constructor(private http:HttpClient) {  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getTickets(username:any): Observable<Ticket[]> {
    console.log('call ticket on user info api call ==> ' + username + ' <=========');
    return this.http.get<any>(this.url + '/ticket/details/'+username, this.httpOptions);
  }
}
