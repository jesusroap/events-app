import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    EventsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
