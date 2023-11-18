import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import * as moment from 'moment';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  list: any[] = [];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents() {
    this.adminService.getEvents().subscribe(resp => {
      this.list = resp
      this.list.forEach(element => {
        element.date = moment(element.date).format('lll')
      });
    })
  }

  deleteEvent(id: number) {
    this.adminService.deleteEvent(id).subscribe((resp: any) => {
      alert(resp.message)
      this.getEvents()
    })
  }
}
