import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestService } from './guest.service';
import { Guest } from '../interface/guest';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  // Variables
  guestFormGroup: FormGroup;
  guests: Observable<Guest>;
  //guestPaginate: GuestPaginate;
  private _destroyed$: any = new Subject();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private guestService: GuestService
  ) {
    this.guestFormGroup = formBuilder.group({
      user: [
        '',
        [Validators.required]
      ],
    });
    
  }

  ngOnInit(): void {
    
    this.guestService.getAll().subscribe(x => {
      console.log(x);
    });
  }

  create(guest: Guest) {
    var a = this.guestService.create(guest).pipe(takeUntil(this._destroyed$));
    a.subscribe(x => {
      console.log(x);

      //this.guests.push(x);
    });
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
