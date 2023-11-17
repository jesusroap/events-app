import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventDTO } from '../models/eventDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url: string = "http://localhost:8080"

  constructor(
    private http: HttpClient
  ) { }

  getEvents() {
    return this.http.get<any>(`${this.url}/events`);
  }

  getEvent(id: string | null) {
    return this.http.get<any>(`${this.url}/events/event/${id}`);
  }

  saveEvent(event : EventDTO) {
    return this.http.post<any>(`${this.url}/events/save`, event);
  }

  deleteEvent(id: number) {
    return this.http.delete<any>(`${this.url}/events/delete/${id}`)
  }
}
