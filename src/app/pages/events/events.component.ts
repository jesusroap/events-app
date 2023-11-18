import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { EventDTO } from 'src/app/admin/models/eventDTO.model';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  list: EventDTO[] = [];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents() {
    this.adminService.getEvents().subscribe(resp => {
      this.list = resp;
      this.list.forEach(element => {
        element.date = moment(element.date).format('lll')
      });
    })
  }

}
