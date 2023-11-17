import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';

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
    this.adminService.getEvent(this.id).subscribe(resp => {
      this.form = resp;
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
