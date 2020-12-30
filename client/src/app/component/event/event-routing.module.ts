import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "../../services/auth-guard.service";
import { EventListComponent } from "./list/list.component";
import { EventRegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: 'event',
    component: EventListComponent, 
    canActivate: [AuthGuardService]
  },
  {
    path: 'event/register',
    component: EventRegisterComponent, 
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
