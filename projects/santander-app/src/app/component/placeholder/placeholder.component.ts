import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {

  constructor(private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.authentication.executeSayHello().subscribe(data => console.log(data));

  }

}
