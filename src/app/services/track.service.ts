import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Track } from '../components/track/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  url="http://localhost:7070";

  constructor(private http:HttpClient) {  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getTrack(username:any): Observable<Track[]> {
    return this.http.get<any>(this.url + '/track/details/'+username, this.httpOptions);
  }
}
