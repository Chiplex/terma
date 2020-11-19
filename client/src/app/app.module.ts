import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgxDatatableModule } from "@swimlane/ngx-datatable";


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EventModule } from "./component/event/event.module";
import { PeopleComponent } from './component/people/people.component';
import { ListComponent } from './component/people/list/list.component';
import { RegisterComponent } from './component/people/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    ListComponent,
    RegisterComponent,
  ],
  imports: [
    //NgxDatatableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EventModule,
    //FormsModule,
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
