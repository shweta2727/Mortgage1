import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registrationSuccess = false;
  confirmpassword = '';
  userID = '';

  constructor(private register: AuthenticationService) { }
  data: any = {
    dateOfBirth: '',
    email: '',
    firstName: '',
    forgetPasswordA: '',
    forgetPasswordQ: '',
    lastName: '',
    password: ''
  };

  ngOnInit(): void {
  }

  registerUser(): void {

    this.register.registerUser(this.data).subscribe(
      (data: any ) => {
        this.registrationSuccess = true;
        this.userID = data.userId;
        console.log(data);
      },
      err => console.log(err));
    console.log(this.data);

  }

}
