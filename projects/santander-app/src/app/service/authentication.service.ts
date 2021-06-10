import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
export const TOKEN = 'token';
export const USERID = 'userid';
export const AUTHENTICATED_USER = 'authenticaterUser';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpclient: HttpClient) { }
  get userActionOccured(): Observable<void> { return this.userAction.asObservable(); }
  username = '';
  userAction: Subject<void> = new Subject();
  getAuthenticatedUser(): string | null {
    return  sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getUserId(): number  {

    const userid = sessionStorage.getItem(USERID);
    if (userid === null) {
      throw new Error('null');
    }
    return parseInt(userid, 10);


  }

  iuserloggedIn(): boolean {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  getAuthenticatedToken(): string | null {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    else { throw new Error('not found'); }
  }
  logout(): boolean {

    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(USERID);
    return true;
  }



  executeJWTAuthenticationService(email: any, pwd: string): Observable<any> {

    return this.httpclient.post<any>(
      `http://20.198.105.99/authenticate`, {
      email,
      pwd
    })
      .pipe(
        map(
          data => {

            sessionStorage.setItem(AUTHENTICATED_USER, `${data.firstName} ${data.lastName}`);
            sessionStorage.setItem(TOKEN, `Bearer ${data.jwt}`);
            sessionStorage.setItem(USERID, `${data.userId}`);

            return data;
          }
        )
      );

  }
  executeSayHello(): Observable<any> {
    return this.httpclient.get<string>(
      `http://20.198.105.99/mortgage-api/api/valuation/9`);
  }
  registerUser(body: any): Observable<any> {
    return this.httpclient.post(
      `http://20.198.105.99/user-registration-service/users/register`, body
    );
  }

  notifyUserAction(): void {
    this.userAction.next();
  }



  logOutUser(): void {
    console.log('user logout');
    location.reload();
    this.logout();
  }

}

