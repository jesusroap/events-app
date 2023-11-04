import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  form: EventDTO = new EventDTO();
  id: string | null = "";

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    @Inject(LOCALE_ID) private locale: string
  ) {
    route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? "0";
    })
  }

  ngOnInit(): void {
    this.adminService.getEvent(this.id).subscribe(resp => {
      this.form = resp;
      this.form.date = moment(resp.date).locale(this.locale).format("yyyy-MM-DDThh:mm");
    })
  }

  submit() {
    console.log(this.form)
  }

}

class EventDTO {
  id: number;
  name: string;
  date: string | null;

  constructor() {
    this.id = 0;
    this.name = "";
    this.date = ""
  }
}
