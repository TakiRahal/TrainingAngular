import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {AddUpdateUserComponent} from "./components/add-update-user/add-update-user.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListUsersComponent } from './components/list-users/list-users.component';


@NgModule({
  declarations: [
    AddUpdateUserComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
