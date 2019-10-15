import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private user:UserServiceService, private router: Router) { }
  
  canActivate(): boolean {
    if (!this.user.isLogged()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
