import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NgbModule,
    MatCardModule
  ],
  exports: [HeaderComponent, FooterComponent, MatCardModule]
})
export class SharedModule {}
