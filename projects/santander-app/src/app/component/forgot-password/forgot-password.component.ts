import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ForgotpasswordService } from '../../service/forgotpassword.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = '';
  confirmpassword = '';
  invalidPassword = '';
  showQuestion = false;
  disabled = false;
  forgotpasswordQuestion = 'ssss';
  answer = '';
  ShowPassword = false;
  alert = false;

  constructor(private forgotpasswordservice: ForgotpasswordService) { }

  ngOnInit(): void {
  }
  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'This field is required';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  checkpassword(): string{
    return this.confirmpassword !== this.password ? 'password do not match' : '';




  }
  change(): void{
    console.log('changed');

    if (this.getErrorMessage() !== '') {
    this.disabled = true;
    }
    else {
    this.disabled = false;
    }
  }
  Forgotpassword(): void{

    if (this.checkpassword() !== ''){
      window.alert('password do not match');

    }
    else{
    console.log('Clicked');
    if (!this.showQuestion) {
      this.forgotpasswordservice.executeForgotPassword(this.email.value).subscribe(

        (data: any) => {
          this.showQuestion = true;
          this.forgotpasswordQuestion = data.question;
          console.log(data);
        },
        err => { window.alert('Incorrect Email Supplied!'); console.error(err);
        }
      );
    } else if (!this.ShowPassword) {
      this.forgotpasswordservice.
      executeForgotPasswordReset(this.answer, this.email.value, this.forgotpasswordQuestion).
      subscribe((data: any) => {
        if (data.email != null) {
          this.ShowPassword = true;
          console.log(data);
        }
        else {
        window.alert('Wrong Answer Supplied!!');
        }

      }, err => {
        console.error(err);

      }
      );

    }
    else{
      this.forgotpasswordservice.executePasswordReset(this.email.value, this.password).

      subscribe(data => {
        this.alert = true;
        console.log(data); });

    }
  }

  }
}
