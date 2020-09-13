import { Injectable } from '@angular/core';
import { Guest } from '../../interface/guest';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  // Variables
  options: any;
  guestUrl:string = 'http://localhost:8000/api/guest';

  constructor(private http: HttpClient,) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
  }

  create(guest: Guest): Observable<ArrayBuffer> {
    let body = JSON.stringify(guest);
    return this.http.post(this.guestUrl, body, this.options)
  }

  getAll(){
    let BearerToken = 'Bearer ' + localStorage.getItem('access_token');
    let headers = new HttpHeaders().set('Authorization', BearerToken);
    return this.http.get(this.guestUrl, {headers});
  }
}
