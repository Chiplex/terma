import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './guest.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    canActivate: [ AuthGuardService ]
  }
];


@NgModule({
  declarations: [GuestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GuestModule { }
