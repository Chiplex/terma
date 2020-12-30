import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { People } from "src/app/interface/people";
import { PeopleService } from "src/app/services/people.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PeopleListComponent implements OnInit {
  public people$: Observable<People[]>;
  public columns = [{name:'name'}, {name: 'country'}, {name:'gender'}];

  constructor(public peopleService:PeopleService) { }

  ngOnInit(): void {
    this.peopleService.index().subscribe(res => this.onSuccess(res));
  }
  public onSuccess(res){
    this.people$ = res;
  }

}
