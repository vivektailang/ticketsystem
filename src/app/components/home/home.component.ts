import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { InfoDetails } from './info-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subject:'';
  desc:'';
  details: InfoDetails[] = [];
  panelOpenState = false;

  constructor(private informationService:InformationService) {
      this.subject = '';
      this.desc = '';
      //console.log('In information');
      this.getInfo();
  }


  getInfo() {

    this.informationService.homeInfo(null).subscribe(
            (response:any)=>{
              this.subject = response.subject;
              this.desc = response.desc;
              this.details = response.details;
            },
            error=>{
              console.log("Error = " + error.message);
            }
         )

  }

  ngOnInit(): void {
  }

}
