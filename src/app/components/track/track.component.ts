import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../services/track.service';
import { LoginService } from '../../services/login.service';
import { Track } from './track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  userid: string = '';
  track: Track[] = [];
  displayedColumns: string[] = ['id', 'desc','assigned','escalation', 'slaDate', 'action'];

  constructor(private trackService:TrackService, private loginService: LoginService) {
    let username = this.loginService.getUsername();
    this.userid = username;
    this.getTrackData(username);
  }

  ngOnInit(): void {
  }

  getTrackData(username:any) {
    this.trackService.getTrack(username).subscribe(
          (response:any)=>{
              this.track = response;
          },
          error=>{
            console.log("Error = " + error.message);
          }
        )
  }
}
