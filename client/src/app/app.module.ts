import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
// import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
