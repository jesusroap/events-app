import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import * as moment from 'moment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  list: any[] = [];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getEvents().subscribe(resp => {
      this.list = resp
      this.list.forEach(element => {
        element.date = moment(element.date).format('lll')
      });
    })
  }

}
