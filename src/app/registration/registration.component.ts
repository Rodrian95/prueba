import { Component, OnInit } from '@angular/core';
import{ UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  name: any;
  email: any;
  password: any;
  

  
  ngOnInit() {

  }

  registration(){

    console.log(this.name);
    console.log(this.email);
    console.log(this.password);

    this.userService.registration(this.name, this.email, this.password).subscribe(
      res => {
        console.log('works');
      },
      error => {
        console.log(error);
      }
    )

  }

}
