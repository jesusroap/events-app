import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  list: any;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents() {
    this.adminService.getEvents().subscribe(resp => {
      this.list = resp
    })
  }

  deleteEvent(id: number) {
    this.adminService.deleteEvent(id).subscribe((resp: any) => {
      alert(resp.message)

      this.getEvents()
    })
  }

}
