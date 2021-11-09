import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Asset } from '../components/asset/asset';



@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http:HttpClient) { }

  url="http://localhost:7070";

    // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAssets(type:any): Observable<Asset[]> {
    return this.http.get<any>(this.url + '/asset/details/'+type, this.httpOptions);
  }
}
