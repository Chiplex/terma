import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { People } from 'src/app/interface/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class PeopleRegisterComponent implements OnInit {

  public people: People = {
    id: '',
    name: '',
    otherName: '',
    lastName: '',
    otherLastName: '',
    country: '',
    gender: '',
    dateBirth: '',
    gdpr_consent: false,
  }

  public peopleForm: FormGroup;
  public errors:any[] = [];
  public message:string = "";

  constructor(
    private formBuilder: FormBuilder,
    public peopleService: PeopleService,
    private router: Router
  ) { 
    this.peopleForm = this.formBuilder.group({
      name: '',
      otherName: '',
      lastName: '',
      otherLastName: '',
      country: '',
      gender: '',
      dateBirth: '',
      gdpr_consent: false,
    });
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.people.name = form.name;
    this.people.otherName = form.otherName;
    this.people.lastName = form.lastName;
    this.people.otherLastName = form.otherLastName;
    this.people.country = form.country;
    this.people.gender = form.gender;
    this.people.dateBirth = form.dateBirth;
    this.people.gdpr_consent = form.gdpr_consent;
    
    this.peopleService.store(this.people).subscribe(res => this.onSuccess(), (err: HttpErrorResponse) => this.onError(err));
  }

  public onError(err){
    this.errors = this.resolveErrorResponse(err);
  }

  public onSuccess(){
    this.errors = [];
    this.router.navigate(["/people"]);
  }

  private resolveErrorResponse(errorResponse: HttpErrorResponse) {
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
