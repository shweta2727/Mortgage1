import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../module/material/material.module';

@Component({
  selector: 'app-mortage-landing',
  templateUrl: './mortage-landing.component.html',
  styleUrls: ['./mortage-landing.component.scss']
})
export class MortageLandingComponent implements OnInit {
  applyFlag = false;
  optionsFlag = false;
  confirmFlag = false;
  propertyFlag = false;
  valuationFlag = false;
  occuppantFlag = false;
  paymentFlag = false;
  reviewSubmitFlag = false;
  constructor() { }

  ngOnInit(): void {
    this.resetFlags();
    this.applyFlag = true;
  }
  optionClicked(flag: string): void{
    this.resetFlags();
    if (flag === 'applyFlag'){
    this.applyFlag = true; }
    else if (flag === 'confirmFlag'){
    this.confirmFlag = true;
    }
    else if (flag === 'occuppantFlag'){
    this.occuppantFlag = true;
    }
    else if (flag === 'optionsFlag'){
    this.optionsFlag = true;
    }
    else if (flag === 'paymentFlag'){
    this.paymentFlag = true;
    }
    else if (flag === 'propertyFlag'){
    this.propertyFlag = true;
    }
    else if (flag === 'reviewSubmitFlag'){
    this.reviewSubmitFlag = true;
    }
    else if (flag === 'valuationFlag'){
    this.valuationFlag = true;
    }
  }

  resetFlags(): void{
    this.applyFlag = false;
    this.confirmFlag = false;
    this.occuppantFlag = false;
    this.optionsFlag = false;
    this.paymentFlag = false;
    this.propertyFlag = false;
    this.reviewSubmitFlag = false;
    this.valuationFlag = false;

  }





}
