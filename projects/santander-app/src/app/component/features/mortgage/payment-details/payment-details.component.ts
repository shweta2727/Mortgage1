import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentDetailsService } from 'projects/santander-app/src/app/service/payment-details.service';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})

export class PaymentDetailsComponent implements OnInit {
  dataexist = false;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private paymentdetailservice: PaymentDetailsService) { }
  // circumstances: string = '';
  // sortcode:string='';
  // accoutnname:string='';
  // accountnumber:string='';
  // dayOfPayment:string=''

  paymentDetails: Result = {
    sortCode: 0,
    accountNumber: 0,
    accountHolderName: '',
    currentcircumstances: 12340,
    dayOfPayment: 12340
  };
  paymentDetailsinput: Input = {
    accountHolderName: 'string',
    accountNumber: 0,
    currentCircumstances: 0,
    dayOfPayment: 0,
    sortCode: 0,
    userId: 0
  }  ;
  ngOnInit(): void {

    this.paymentdetailservice.executeGETPaymentDetailsById().subscribe(

      (data: any) => {
        this.dataexist = true;
        this.paymentDetails = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }

  saveAndNavigate(): void {
    this.paymentDetailsinput.dayOfPayment = this.paymentDetails.dayOfPayment;
    this.paymentDetailsinput.sortCode = this.paymentDetails.sortCode;
    this.paymentDetailsinput.accountHolderName = this.paymentDetails.accountHolderName;
    this.paymentDetailsinput.accountNumber = this.paymentDetails.accountNumber;
    this.paymentDetailsinput.currentCircumstances = this.paymentDetails.currentcircumstances;
    this.paymentDetailsinput.userId = this.paymentdetailservice.userid();
    if (!this.dataexist){
      console.log(this.paymentDetailsinput);
      this.paymentdetailservice.executepaymentdetailsPOST(this.paymentDetailsinput).subscribe(
        data => {console.log(data);
        }, err => {console.log(err);
        }
      );
    }else{
      console.log('put ');

      console.log(this.paymentDetailsinput);
      this.paymentdetailservice.executepaymentdetailsPUT(this.paymentDetailsinput).subscribe(
        data => {console.log(data);
        }, err => {console.log(err);
        }
      );
    }


    console.log(this.paymentDetails);


    // this.paymentdetailservice.executepaymentdetailsPOST(this.paymentDetails).subscribe(
    //   data=>{console.log(data);
    //   }
    // )
    // this.newItemEvent.emit("applyFlag");
  }
  radiobutton(x: any, s: any): void {
    if (s === 'payment') {
      console.log(x.value);
      console.log(s);
      this.paymentDetails.dayOfPayment = x.value;
    }

    else if (s === 'circumstances') {
      console.log(x.value);
      console.log(s);
      this.paymentDetails.currentcircumstances = x.value;
    }


  }


}
interface Result {
  sortCode: number;
  accountNumber: number;
  accountHolderName: string;
  currentcircumstances: number;
  dayOfPayment: number;
}
interface Input {
  accountHolderName: string;
  accountNumber: number;
  currentCircumstances: number;
  dayOfPayment: number;
  sortCode: number;
  userId: number;
}
