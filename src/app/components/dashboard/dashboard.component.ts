import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { UserNotifications } from './user-notifications';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private informationService:InformationService,
                private loginService:LoginService) { }

  username: string = '';
  userId: string = '';
  userRole = '';
  userPosition = '';
  userNotifications: UserNotifications[] = [];
  displayedColumns: string[] = ['id', 'tasks','desc'];


  //var notifications: note;

  ngOnInit(): void {
    this.userId = '';
    this.userRole = '';
    this.userPosition = '';
    this.getUserInfo(this.loginService.getUsername());
  }

  getUserInfo(username: any) {
    this.informationService.userInfo(username).subscribe(
            (response:any)=>{
              this.userId = response.userId;
              this.userRole = response.userRole;
              this.userPosition = response.userPosition;
              console.log(response.userPosition);
              this.userRole = response.desc;
              this.userNotifications = response.notifications;
              console.log(this.userNotifications);
            },
            error=>{
              console.log("Error = " + error.message);
            }
          )
  }

}
