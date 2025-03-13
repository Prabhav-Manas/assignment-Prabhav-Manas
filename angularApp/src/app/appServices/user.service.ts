import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='https://reqres.in/api/users/'

  constructor(private http:HttpClient) { }

  getUserData(page: number = 1, per_page: number = 5){
    return this.http.get(`${this.apiUrl}?page=${page}&per_page=${per_page}`);
  }
}
