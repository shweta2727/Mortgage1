import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MortgageRoutingModule } from './mortgage-routing.module';

import { RouterModule } from '@angular/router';
import { MortageOptionsComponent } from './mortage-options/mortage-options.component';
import { MortageLandingComponent } from './mortage-landing/mortage-landing.component';
import { ApplyMortgageComponent } from './apply-mortgage/apply-mortgage.component';
import { ConfirmMortgageComponent } from './confirm-mortgage/confirm-mortgage.component';
import { OtherOccupantsComponent } from './other-occupants/other-occupants.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ReviewSubmitComponent } from './review-submit/review-submit.component';
import { ValuationComponent } from './valuation/valuation.component';
import { MaterialModule } from '../../../module/material/material.module';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [MortageOptionsComponent,
    MortageLandingComponent,
    ApplyMortgageComponent, ConfirmMortgageComponent, OtherOccupantsComponent, PaymentDetailsComponent,
    PropertyDetailsComponent, ReviewSubmitComponent,
    ValuationComponent,

    UserActivityComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [RouterModule]
})
export class MortgageModule { }
