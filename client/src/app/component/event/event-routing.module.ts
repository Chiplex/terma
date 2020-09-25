import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from "./list/list.component";
import { EventRegisterComponent } from "./register/register.component";
import { AuthGuardService } from "../../services/auth-guard.service";


const routes: Routes = [
  {
    path: 'event',
    component: EventListComponent, 
    canActivate: [AuthGuardService]
  },
  {
    path: 'event/create',
    component: EventRegisterComponent, 
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
