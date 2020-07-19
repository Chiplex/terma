import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from '../interface/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variables
  authUrl = 'http://localhost:8000/api/oauth/token';
  apiUrl = 'http://localhost:8000/api';
  options: any;

  /**
   * Constructor
   * @param http The http client object
   */
  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
  }

  /**
   * Get an access token
   * @param e The email address
   * @param p The password string
   */
  login(loginRequest: LoginRequest) {
    let json = {
      grant_type: 'password',
      client_id: '2',
      client_secret: '7839cd8pCEohS183TNbKE2CqQBwpc7f3xryS53yw',
      username: loginRequest.email,
      password: loginRequest.password,
      scope: ''
    };
    let body = JSON.stringify(json);
    return this.http.post(this.authUrl, body, this.options);
  }

  /**
   * Revoke the authenticated user token
   */
  logout() {
    let BearerToken = 'Bearer ' + localStorage.getItem('access_token');
    this.options.headers.Authorization = BearerToken;
    return this.http.get(this.apiUrl + '/logout', this.options);
  }
}
