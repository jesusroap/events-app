import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventDTO } from '../models/eventDTO.model';
import { UserDTO } from '../models/userDTO.model';
import { FilterDTO } from '../models/filterDTO.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url: string = environment.urlBase

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
    return this.http.post<any>(`${this.url}/admin/save`, event);
  }

  updateEvent(event : EventDTO) {
    return this.http.put<any>(`${this.url}/admin/edit`, event);
  }

  deleteEvent(id: number) {
    return this.http.delete<any>(`${this.url}/admin/delete/${id}`)
  }

  login(user: UserDTO) {
    return this.http.post<any>(`${this.url}/admin/login`, user)
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.url}/admin/file_upload`, formData);
  }

  filterEvents(filter: FilterDTO) {
    return this.http.post<any>(`${this.url}/events/filter`, filter);
  }

  getSession() {
    let datosString = localStorage.getItem("session");

    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos;
    } else {
      return null;
    }
  }

  setSession(success: boolean) {
    let data = JSON.stringify(success);
    localStorage.setItem("session", data);
  }

  deleteSession() {
    localStorage.removeItem("session");
  }
}
