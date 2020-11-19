import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PeopleListComponent } from "./list/list.component";
import { PeopleRegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleRegisterComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PeopleModule { }
