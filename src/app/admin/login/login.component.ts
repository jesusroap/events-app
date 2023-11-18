import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { UserDTO } from '../models/userDTO.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('formValid', { static: false }) formEvent: ElementRef | undefined;

  user: UserDTO = new UserDTO()

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(event: any) {
    if (this.formEvent) {
      this.formEvent.nativeElement.classList.add('was-validated');
    }

    if (this.formEvent && !this.formEvent.nativeElement.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      return
    }

    this.adminService.login(this.user).subscribe(resp => {
      alert(resp.message)
      if (resp.success) {
        this.adminService.setSession(resp.success)
        this.router.navigateByUrl("/admin/dash/events")
      }
    })
  }

}
