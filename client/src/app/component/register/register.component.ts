import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { RegisterRequest } from '../../interface/register-request';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Variables
  registerFormGroup: FormGroup;
  loading: boolean;
  errors: boolean;
  messageErrors: string;
  formStatus = new FormStatus();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.registerFormGroup = formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(255)]
      ],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)]
      ],
      password: [
        '',
        Validators.required
      ],
      password_confirmation: [
        '',
        Validators.required
      ]
    });
  }

  ngOnInit(): void {
  }

  /**
   * register the user based on the form values
   */
  register(registerRequest: RegisterRequest): void {
    this.formStatus.onFormSubmitting();
    this.loading = true;
    this.registerService.register(registerRequest)
      .subscribe((data) => {
        this.loading = false;
        this.formStatus.onFormSubmitResponse({success: true, messages: ["A sido registrado correctamente"]});
      },
      (httpErrorResponse: HttpErrorResponse) => {
        this.loading = false;
        const messages = this.extractErrorMessagesFromErrorResponse(httpErrorResponse);
          // 3 - call onFormSubmitResponse with the submission success status (false) and the array of messages
          this.formStatus.onFormSubmitResponse({success: false, messages: messages});
        });
  }

  extractErrorMessagesFromErrorResponse(errorResponse: HttpErrorResponse) {
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
  };
}

interface IShowMessages {
  error?: boolean;
  success?: boolean;
}

class FormStatus {
  submitted: boolean;
  showMessages: IShowMessages;
  errors: string[];
  messages: string[];

  constructor(params?: { submitted?: boolean, showMessages?: IShowMessages, errors?: string[], messages?: string[] }) {
    this.submitted = (params && params.submitted) || false;
    this.showMessages = (params && params.showMessages) || {};
    this.errors = (params && params.errors) || [];
    this.messages = (params && params.messages) || [];
  }

  /**
   * Determines if error messages can be shown
   */
  canShowErrors() {
    return this.showMessages.error && this.errors && this.errors.length > 0 && !this.submitted;
  }

  /**
   * Determines if success messages can be shown
   */
  canShowSuccess() {
    return this.showMessages.success && this.messages && this.messages.length > 0 && !this.submitted;
  }

  /**
   * Called when the form it's attached to is being submitted
   * Resets the `errors` and `messages` arrays and sets `submitted` to true
   */
  onFormSubmitting() {
    this.errors = this.messages = [];
    this.submitted = true;
  }

  /**
   * Called when the form it's attached to has received a response for it's submit action
   * Sets `submitted` to false, sets and displays error or success messages
   *
   * @param params
   */
  onFormSubmitResponse(params: { success: boolean, messages: string[] }) {
    this.submitted = false;
    if (params.success) {
      this.showMessages.success = true;
      this.messages = params.messages;
    } else {
      this.showMessages.error = true;
      this.errors = params.messages;
    }
  }
}
