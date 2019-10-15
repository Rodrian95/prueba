import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient, private jwtHelper:JwtHelperService, private router:Router) { }

  registration(name: string, email: string, password: string){
    return this.http.post('http://localhost:3000/api/registration', {
      name: name,
      email: email,
      password: password
    });
  }

  login(email: string, password: string){
    return this.http.post('http://localhost:3000/api/login', {
      email: email,
      password: password
    });  
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  isLogged() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
