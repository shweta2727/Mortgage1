import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class PropertyDetailsService {

  constructor(private httpclient: HttpClient, private authservice: AuthenticationService) { }
  getUserId(): number{
    const userid = this.authservice.getUserId();
    return userid;

    }
    getPropertyDetailsById(): Observable<any>{
      const userid = this.authservice.getUserId();
      return this.httpclient.get(`http://20.198.105.99/mortgage-api/api/propertyDetailsById/${userid}`);
    }
    getPropertyDetailsPOST(data: any): Observable<any>{

      return this.httpclient.post(`http://20.198.105.99/mortgage-api/api/propertyDetails`, data);
    }
    getPropertyDetailsPUT(data: any): Observable<any>{
      const userid = this.authservice.getUserId();
      return this.httpclient.put(`http://20.198.105.99/mortgage-api/api/propertyDetails/${userid}`, data);
    }
}
