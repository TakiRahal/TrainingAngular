import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/user.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  save(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>('http://localhost:8080/api/customer/add', user);
  }

  fetchCustomers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('http://localhost:8080/api/customer/all');
  }

  fetchById(id: number): Observable<IUser>{
    return this.httpClient.get<IUser>('http://localhost:8080/api/customer/'+id);
  }
}
