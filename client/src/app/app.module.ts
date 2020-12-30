import { NgModule } from '@angular/core';
//import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { EventModule } from "./component/event/event.module";
import { PeopleModule } from './component/people/people.module';
import { CredentialModule } from './component/credential/credential.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    //FormsModule,
    //ReactiveFormsModule,
    //NgxDatatableModule,

    EventModule,
    PeopleModule,
    CredentialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
