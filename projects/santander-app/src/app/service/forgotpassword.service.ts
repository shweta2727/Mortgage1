import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private httpclient: HttpClient) { }

  executeForgotPassword(email: string): Observable<any> {
    return this.httpclient.post(
      `http://20.198.105.99/user-api/users/forgetPassword`, { email }
    );
  }
  executeForgotPasswordReset(answer: string, email: string, question: string): Observable<any> {
    return this.httpclient.post(
      `http://20.198.105.99/user-api/users/forgetPassword/reset`, { answer, email, question }
    );
  }
  executePasswordReset(email: string, pwd: string): Observable<any> {
    return this.httpclient.post(
      `http://20.198.105.99/user-api/users/resetPassword/${email}`, { pwd }
    );
  }

}
