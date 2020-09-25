import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";


import { EventListComponent } from "./list/list.component";
import { EventRegisterComponent } from "./register/register.component";



@NgModule({
  declarations: [
    EventListComponent,
    EventRegisterComponent,
  ],
  imports: [
    NgxDatatableModule,
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }