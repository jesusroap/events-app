import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  form: EventDTO = new EventDTO();

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form)
  }

}

class EventDTO {
  id: number;
  name: string;
  date: Date;

  constructor() {
    this.id = 0;
    this.name = "";
    this.date = new Date()
  }
}
