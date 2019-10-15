import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private user:UserServiceService, private router: Router) { }

  email: any;
  password: any;

  ngOnInit() {
  }

  login(){
    this.user.login(this.email, this.password).subscribe(
      res=>{
        if(res['token']){
          this.user.setToken(res['jwt']);
          this.router.navigateByUrl('/start');
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

}
