import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { RegisterRequest } from '../interface/register-request';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // Attributte
  authUrl = 'http://localhost:8000/oauth/token';
  apiUrl = 'http://localhost:8000/api';
  registerUrl = 'http://localhost:8000/api/register';
  options: any;

  /**
   * Constructor
   * @param http The http client object
   */
  constructor(private http: HttpClient,) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
  }

  register(registerRequest:RegisterRequest) {
    let body = JSON.stringify(registerRequest);
    return this.http.post(this.registerUrl, body, this.options);
  }
}
