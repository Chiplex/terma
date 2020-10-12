import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Event } from "./../interface/event";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(public http: HttpClient) { }

  store(event: Event) {
    const body = JSON.stringify(event);
    const formData = new FormData();
    formData.set('name', event.title);
    formData.set('willStart', event.willStart);
    formData.set('willEnd', event.willEnd);
    const url = 'http://127.0.0.1:8000' + '/api/event';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    headers.set('Accept', 'application/json');
    return this.http.post(url, formData, { headers })
      .pipe(map(data => {
        return data;
      }));

  }
}
