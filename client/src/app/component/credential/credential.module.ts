import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialRoutingModule } from './credential-routing.module';

import { CredentialListComponent } from './list/list.component';
import { CredentialRegisterComponent } from './register/register.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CredentialListComponent,
    CredentialRegisterComponent
  ],
  imports: [
    CommonModule,
    CredentialRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CredentialModule { }
