import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from "src/app/interface/event";

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
    willStart: '',
    willEnd: ''
  };
  public eventForm: FormGroup;
  public error:boolean = false;
  public message:string = "false";

  constructor(
    private formBuilder: FormBuilder,
    public eventService: EventService,
    private router: Router
  ) {
    this.eventForm = this.formBuilder.group({
      title: '',
      willStartDate: '',
      willStartTime: '',
      willEndDate: '',
      willEndTime: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit(form) {
    this.event.title = form.title;
    this.event.willStart = form.willStartDate + ' ' + form.willStartTime;
    this.event.willEnd = form.willEndDate + ' ' + form.willEndTime;
    
    this.eventService.store(this.event).subscribe(res => this.onSuccess() , err => this.onError(err));
  }

  onError(err){
    this.error = true;
    this.message = err.error.message

  }

  onSuccess(){
    this.error = false;
    this.router.navigate(['/event']);
  }
}
