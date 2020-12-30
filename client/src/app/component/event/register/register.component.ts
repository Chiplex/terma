import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from "src/app/interface/event";
import { HttpErrorResponse } from '@angular/common/http';

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
  public errors:any[] = [];
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
    
    this.eventService.store(this.event).subscribe(res => this.onSuccess() , (err: HttpErrorResponse) => this.onError(err));
  }

  onError(err){
    this.errors = this.resolveErrorResponse(err);
  }

  onSuccess(){
    this.errors = [];
    this.router.navigate(['/event']);
  }

  resolveErrorResponse(errorResponse: HttpErrorResponse) {
    // 1 - Create empty array to store errors
    const errors = [];
  
    // 2 - check if the error object is present in the response
    if (errorResponse.error) {
  
      // 3 - Push the main error message to the array of errors
      errors.push(errorResponse.error.message);
  
      // 4 - Check for Laravel form validation error messages object
      if (errorResponse.error.errors) {
  
        // 5 - For each error property (which is a form field)
        for (const property in errorResponse.error.errors) {
  
          if (errorResponse.error.errors.hasOwnProperty(property)) {
  
            // 6 - Extract it's array of errors
            const propertyErrors: Array<string> = errorResponse.error.errors[property];
  
            // 7 - Push all errors in the array to the errors array
            propertyErrors.forEach(error => errors.push(error));
          }
        }
      }
    }

    return errors;
  }
}
