import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: any;

  constructor(public authentication: AuthenticationService, private router: Router) { }

  ngOnInit(): void {


  }

  logout(): void {
    this.router.navigate(['login']);
    this.authentication.logout();


  }

}
