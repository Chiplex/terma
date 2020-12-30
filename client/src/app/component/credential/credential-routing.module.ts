import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { CredentialListComponent } from './list/list.component';
import { CredentialRegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:'credential',
    component: CredentialListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'credential/register',
    component: CredentialRegisterComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialRoutingModule { }
