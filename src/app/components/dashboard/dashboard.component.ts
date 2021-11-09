import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { UserNotifications } from './user-notifications';
import { LoginService } from '../../services/login.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private informationService:InformationService,
                private loginService:LoginService) {
                Chart.register(...registerables);
  }

  username: string = '';
  userId: string = '';
  userRole = '';
  userPosition = '';
  userNotifications: UserNotifications[] = [];
  displayedColumns: string[] = ['id', 'tasks','desc'];
  chart: any = [];
  barchart: any = [];

  //var notifications: note;

  ngOnInit(): void {
    this.userId = '';
    this.userRole = '';
    this.userPosition = '';
    this.getUserInfo(this.loginService.getUsername());

    //Chart prepration
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
          labels: ['Pending', 'Abondaned', 'In Progress', 'Closed', 'Opened', 'New'],
          datasets: [{
              label: 'Total # of Tickets',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: '#581845',
              borderColor: '900C3F',
              borderWidth: 1
          }]
      },
    });

    this.barchart = new Chart('canvasbar', {
      type: 'bar',
      data: {
          labels: ['Pending', 'Abondaned', 'In Progress', 'Closed', 'Opened', 'New'],
          datasets: [{
              label: 'Total # of Tickets',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: ['#DAF7A6','#FFC300','#FF5733','#C70039','#900C3F','#581845'],
              borderWidth: 1
          }]
      },
    });
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
