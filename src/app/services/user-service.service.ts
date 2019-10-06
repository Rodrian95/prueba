import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  registration(name: string, email: string, password: string){
    return this.http.post('http://localhost:3000/api/insertUser', {
      name: name,
      email: email,
      password: password
    });
  }
}
