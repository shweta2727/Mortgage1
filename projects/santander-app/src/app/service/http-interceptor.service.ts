import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authentication: AuthenticationService, private spinner: NgxSpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();

    console.log('intercepting the request');
    console.log(req.url.toString().includes('mortgage'));
    const auth = req.url.toString().includes('mortgage');
    if (auth) {
      const tokenString = this.authentication.getAuthenticatedToken();
      const username = this.authentication.getAuthenticatedUser();

      console.log(tokenString);

      if (tokenString) {
        req = req.clone({
          setHeaders: {
            Authorization: tokenString
          }
        });
      }
    }

    return next.handle(req).pipe(
      finalize(() => this.spinner.hide())
    );
  }
}
