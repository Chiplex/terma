import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from "./../interface/event";


@Injectable({
  providedIn: 'root'
})
export class EventService {
  url:string = 'http://127.0.0.1:8000';
  action:string = '/api/event';
  authorization:string = 'Authorization';
  token:string = 'Bearer ';
  accessToken = localStorage.getItem('access_token');

  constructor(public http: HttpClient) { }

  index(){
    const url =  this.url + this.action;
    const headers = new HttpHeaders().set(this.authorization, this.token + this.accessToken);
    
    return this.http.get(url, { headers }).pipe(map(data => data));
  }

  store(event: Event) {
    const formData = new FormData();
    formData.set('title', event.title);
    formData.set('willStart', event.willStart);
    formData.set('willEnd', event.willEnd);

    const url = this.url + this.action;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    headers.set('Accept', 'application/json');

    return this.http.post(url, formData, { headers }).pipe(map(data => data));
  }

  protected extractData(res:any){
    return res;
  }
}
