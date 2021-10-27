import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { Issue } from './issue';
import { TicketService } from '../../services/ticket.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket[] = [];
  panelOpenState = false;
  displayedColumns: string[] = ['id', 'tasks','desc'];

  constructor(private ticketService: TicketService,
                private loginService:LoginService) { }

  ngOnInit(): void {
    this.getUserInfo(this.loginService.getUsername());
  }

  getUserInfo(username: any) {
    this.ticketService.getTickets(username).subscribe(
          (response:any)=>{
              this.ticket = response;
              console.log(JSON.stringify(this.ticket));
          },
          error=>{
            console.log("Error = " + error.message);
          }
        )
  }

}
