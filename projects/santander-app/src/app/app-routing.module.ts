import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortageLandingComponent } from './component/features/mortgage/mortage-landing/mortage-landing.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { PlaceholderComponent } from './component/placeholder/placeholder.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'placeholder', component: PlaceholderComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'mortage', component: MortageLandingComponent, canActivate: [AuthGuardService] },
  {
    path: 'mortage',
    loadChildren: () =>
      import('./component/features/mortgage/mortgage.module').then((m) => m.MortgageModule)
  },
  { path: '**', component: LoginComponent }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
