import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from '../interface/login-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variables
  apiUrl = 'http://localhost:8000/api';
  loginUrl = this.apiUrl + '/oauth/token';
  logoutUrl = this.apiUrl + '/logout';
  clienteSecret = '7839cd8pCEohS183TNbKE2CqQBwpc7f3xryS53yw';
  options: any;
  logged: boolean;

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
  create(loginRequest: LoginRequest) {
    let json = {
      grant_type: 'password',
      client_id: '2',
      client_secret: this.clienteSecret,
      username: loginRequest.email,
      password: loginRequest.password,
      scope: ''
    };
    let body = JSON.stringify(json);
    this.logged = true;
    
    return this.http.post(this.loginUrl, body, this.options);
  }

  /**
   * Revoke the authenticated user token
   */
  leave() {
    let BearerToken = 'Bearer ' + localStorage.getItem('access_token');
    let headers = new HttpHeaders().set('Authorization', BearerToken);
    this.logged = false;
    return this.http.get(this.logoutUrl, { headers });
  }

  /**
   * Indica si el usuario esta auth o no
   */
  isLoggedIn() {
    try {
      let accessToken = localStorage.getItem('access_token');
      if (accessToken == null) {
        return false;
      }
      let jpaat = JSON.parse(atob(accessToken.split('.')[1]));
      return typeof jpaat  != 'undefined';
      
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
