import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuardService } from '../../services/guest-guard.service';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    canActivate: [ GuestGuardService ]
  }
];


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
