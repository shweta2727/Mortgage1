import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { MaterialModule } from './module/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { MortageLandingComponent } from './component/features/mortgage/mortage-landing/mortage-landing.component';
import { FeaturesModule } from './module/features/features.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RecaptchaModule } from 'ng-recaptcha';
// if you need forms support:
import {  RecaptchaFormsModule } from 'ng-recaptcha';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ReactiveFormsModule,
    FeaturesModule, MatProgressSpinnerModule, NgxSpinnerModule

  ],
  providers: [
  {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
