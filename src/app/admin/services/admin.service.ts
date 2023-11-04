import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
