import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUpdateUserComponent} from "./components/add-update-user/add-update-user.component";
import {ListUsersComponent} from "./components/list-users/list-users.component";

const routes: Routes = [
  {
    path: 'add-update',
    component: AddUpdateUserComponent
  },
  {
    path: 'list',
    component: ListUsersComponent
  },
  {
    path: 'add-update/:id',
    component: AddUpdateUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
