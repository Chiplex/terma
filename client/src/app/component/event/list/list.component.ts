import { Component, OnInit } from '@angular/core';
import { on } from 'process';
import { Observable } from 'rxjs';
import { Event } from 'src/app/interface/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class EventListComponent implements OnInit {

  event$: Observable<Event[]>;
  // rows = [
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Maasdasdle', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' }
  // ];
  columns = [{ prop: 'title' }, { name: 'willStart' }, { name: 'willEnd' }];
    
  constructor(public eventService: EventService) { }

  ngOnInit(): void {
     this.eventService.index().subscribe(res => this.onSuccess(res));
    
  }

  onSuccess(res){
    this.event$ = res;
    
  }
}
