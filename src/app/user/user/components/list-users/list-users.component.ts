import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/user.model";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUser: IUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchCustomers()
      .subscribe((result: IUser[]) => {
        console.log('Success ', result);
        this.listUser = result.slice();
      }, error => {
        console.log('Error ', error);
      })
  }

}
