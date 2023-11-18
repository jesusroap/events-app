import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.deleteSession();
    this.router.navigateByUrl("/admin")
  }

}
