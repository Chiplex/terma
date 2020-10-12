import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Event } from "../../../interface/event";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class EventRegisterComponent implements OnInit {

  public event: Event = {
    id: '',
    description: '',
    title: '',
    willStart: this.fechaActual(),
    willEnd: ''
  };

  public minStartDate: string = this.fechaActual();
  public minEndDate: string = this.minStartDate;

  eventForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public eventService: EventService
  ) {
    this.eventForm = this.formBuilder.group({
      title: '',
      willStartDate: this.fechaActual(),
      willStartTime: '',
      willEndDate: '',
      willEndTime: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit(form) {
    this.event.title = form.title;
    this.event.willStart = form.willStartDate + ' ' + form.willStartTime
    this.event.willEnd = form.willEndDate + ' ' + form.willEndTime
    this.eventService.store(this.event).subscribe(res => { }, err => { });
    console.log(1);

  }


  fechaActual() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) month = 0 + month;
    if (day < 10) day = 0 + day;
    return year + "-" + month + "-" + day;
  }

  DateAddDays(date, days) {
    console.log(this.minEndDate);

    if (date == null) {

      date = new Date();
    }
    //var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  DateControl(date) {
    var day = date.getUTCDate();
    var month = date.getUTCMonth() + 1;
    var year = date.getUTCFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    return year + "-" + month + "-" + day;
  }
}
