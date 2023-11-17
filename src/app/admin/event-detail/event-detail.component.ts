import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { EventDTO } from '../models/eventDTO.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  form: EventDTO = new EventDTO();
  id: string = "";

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? "0";
    })
  }

  ngOnInit(): void {
    this.getEvent()
  }

  getEvent() {
    this.adminService.getEvent(this.id).subscribe(resp => {
      this.form = resp;
    })
  }

  submit() {
    this.adminService.saveEvent(this.form).subscribe(resp => {
      alert(resp.message)

      this.getEvent()
    })
  }

}
