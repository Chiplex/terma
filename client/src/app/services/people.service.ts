import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { People } from '../interface/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url:string = 'http://127.0.0.1:8000';
  action:string = '/api/people';

  constructor(public http: HttpClient) { }

  index(){
    const url = this.url + this.action;
    const options = this.getOptionsFromHeadersWithToken();

    return this.http.get(url, options).pipe(map(data => data));
  }

  store(people: People){
    const formData = new FormData();
    formData.set('name', people.name);
    formData.set('otherName', people.otherName);
    formData.set('lastName', people.lastName);
    formData.set('otherLastName', people.name);
    formData.set('country', people.country);
    formData.set('gender', people.gender);
    formData.set('dateBirth', people.dateBirth);
    formData.set('gdpr_consent', people.gdpr_consent ? "1" : "0");


    const url = this.url + this.action;
    const options = this.getOptionsFromHeadersWithToken();

    return this.http.post(url, formData, options).pipe(map(data => data));
  }

  protected getOptionsFromHeadersWithToken(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    });
    const option = { headers };

    return option;
  }
}
