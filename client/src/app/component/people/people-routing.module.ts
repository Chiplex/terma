import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { PeopleListComponent } from './list/list.component';
import { PeopleRegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:'people',
    component: PeopleListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'people/register',
    component: PeopleRegisterComponent,
    canActivate: [AuthGuardService]
  }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
