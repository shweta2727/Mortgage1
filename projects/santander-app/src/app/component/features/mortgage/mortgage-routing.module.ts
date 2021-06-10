import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortageLandingComponent } from './mortage-landing/mortage-landing.component';



const routes: Routes = [
     { path: '**', component: MortageLandingComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [

    // Other components, etc
  ],
  exports: [
    RouterModule
     // <-- Component now available to modules which import this one
  ]
})
export class MortgageRoutingModule {}
