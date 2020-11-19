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

  public event$: Observable<Event[]>;
  public columns = [{ name: 'title' }, { name: 'willStart' }, { name: 'willEnd' }];
    
  constructor(public eventService: EventService) { }

  ngOnInit(): void {
     this.eventService.index().subscribe(res => this.onSuccess(res));
    
  }

  public onSuccess(res){
    this.event$ = res;
  }
}
