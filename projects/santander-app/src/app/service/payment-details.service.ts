import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private httpclient: HttpClient, private authservice: AuthenticationService) { }
  userid(): number{
  const userid = this.authservice.getUserId();
  return userid;

  }
  executeGETPaymentDetailsById(): Observable<any>{
    const userid = this.userid();
    return this.httpclient.get(`http://20.198.105.99/mortgage-api/api/getPaymentDetailsById/${userid}`);
  }
  executepaymentdetailsPOST(data: any): Observable<any>{

    return this.httpclient.post(`http://20.198.105.99/mortgage-api/api/payment-details`, data);
  }
  executepaymentdetailsPUT(data: any): Observable<any>{

    return this.httpclient.put(`http://20.198.105.99/mortgage-api/api/update/payment-details`, data);
  }

}
