import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDTO } from '../models/eventDTO.model';
import * as moment from 'moment';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  @ViewChild('formValid', { static: false }) formEvent: ElementRef | undefined;

  form: EventDTO = new EventDTO();
  id: string = "";
  selectedFile!: File;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
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

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submit(event: any) {
    if (this.formEvent) {
      this.formEvent.nativeElement.classList.add('was-validated');
    }

    if (this.formEvent && !this.formEvent.nativeElement.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      return
    }

    if (this.form.id == 0) {
      if(this.selectedFile) {
        this.form.picture = this.selectedFile.name;
        this.adminService.uploadFile(this.selectedFile).subscribe(resp => {
          if (resp.success) {
            this.adminService.saveEvent(this.form).subscribe(resp => {
              if(resp.success) {
                alert(resp.message)
                this.router.navigateByUrl("/admin/events");
              } else {
                alert(resp.message)
              }
            })
          } else {
            alert(resp.message)
          }
        })
      } else {
        this.adminService.saveEvent(this.form).subscribe(resp => {
          if(resp.success) {
            alert(resp.message)
            this.router.navigateByUrl("/admin/events");
          } else {
            alert(resp.message)
          }
        })
      }
    } else {
      if(this.selectedFile) {
        this.form.picture = this.selectedFile.name;
        this.adminService.uploadFile(this.selectedFile).subscribe(resp => {
          if (resp.success) {
            this.adminService.updateEvent(this.form).subscribe(resp => {
              if(resp.success) {
                alert(resp.message)
                this.router.navigateByUrl("/admin/events");
              } else {
                alert(resp.message)
              }
            })
          } else {
            alert(resp.message)
          }
        })
      } else {
        this.adminService.updateEvent(this.form).subscribe(resp => {
          if(resp.success) {
            alert(resp.message)
            this.router.navigateByUrl("/admin/events");
          } else {
            alert(resp.message)
          }
        })
      }
    }
  }

}
