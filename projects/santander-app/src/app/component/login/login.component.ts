import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
export interface FormModel {
  captcha?: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  disabled = true;
  public formModel: FormModel = {};
  constructor(private authentication: AuthenticationService, private router: Router) { }
  email = new FormControl('', [Validators.required, Validators.email]);

  password = '';
  errorMessage = '';
  invalidLogin = false;
  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'This field is required';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
 disableButton(): void{
   console.log('disabled');

   if (this.getErrorMessage() !== '')
   {
     this.disabled = true;

   } else {
     this.disabled = false;
   }
 }
 public resolved(captchaResponse: string): void {
   if (captchaResponse == null){this.disabled = true; }
   console.log(`Resolved captcha with response: ${captchaResponse}`);
}

public onError(errorDetails: RecaptchaErrorParameters): void {


  console.log(`reCAPTCHA error encountered; details:`, errorDetails);
}
  handleLogin(): void {
if (this.email.value === '' || this.password === ''){
window.alert('Please Enter ID and password');
}
else{
    this.authentication.executeJWTAuthenticationService(this.email.value, this.password).subscribe(

      (response) => {
        this.router.navigate(['mortage']);
        console.log(response);
      }, errr => {
        console.log(errr);
        this.invalidLogin = true;
        this.errorMessage = 'Incorrect username or password';
      }
    );
}



  }


  ngOnInit(): void {
  }

}
