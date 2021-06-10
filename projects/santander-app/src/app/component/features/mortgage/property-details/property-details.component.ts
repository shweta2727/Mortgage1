import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormsModule, NgForm } from '@angular/forms';
import { IPropertyDetails } from 'projects/santander-app/src/app/model/propertyDetails';
import { AUTHENTICATED_USER, USERID } from 'projects/santander-app/src/app/service/authentication.service';
import { PropertyDetailsService } from 'projects/santander-app/src/app/service/property-details.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})

export class PropertyDetailsComponent implements OnInit {
  recordExist = false;
  propertyDetailsForm: FormGroup;
  post: any;
  propertyDetails = {
    isPropertyCovered: '' ,
    numberOfBedrooms: 0,
    postCode: '',
    propertyAddress: '',
    propertyAge: 0,
    propertyBuilt: '',
    propertyId: 0,
    propertyType: '',
    tenureType: '',
    userId: 0
  };
  constructor(private fb: FormBuilder, private propertyDetailsService: PropertyDetailsService) {
    this.propertyDetailsForm = this.fb.group({
      PostCode : [null, Validators.required],
      Address : [null, Validators.required],
      PropertyType: [null, Validators.required],
      NoOfBedRooms: [0, Validators.required],
      propertyBuilt: [0, Validators.required],
      propertyAge: [0, Validators.required],
      isPropertyCovered: [null, Validators.required],
      tenureType: [0, Validators.required],
    });
   }

  ngOnInit(): void {
    this.propertyDetailsService.getPropertyDetailsById().subscribe(

      (data: any) => {
        if (data != null){
        this.recordExist = true;
        this.propertyDetails = data[0];
        }
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }
  onModelChangedPostCode(evt: Event): void{

  }
  onModelChangedAddress(evt: Event): void{

  }
  onFormSubmit(): void{
    if (sessionStorage.getItem(USERID) != null){
    this.propertyDetails = {
      isPropertyCovered: (this.propertyDetailsForm.controls.isPropertyCovered.value),
      numberOfBedrooms: (Number)(this.propertyDetailsForm.controls.NoOfBedRooms.value),
      postCode: this.propertyDetailsForm.controls.PostCode.value,
      propertyAddress: this.propertyDetailsForm.controls.Address.value,
      propertyAge: (Number)(this.propertyDetailsForm.controls.propertyAge.value),
      propertyBuilt: (this.propertyDetailsForm.controls.propertyBuilt.value),
      propertyId: (Number)(this.propertyDetailsForm.controls.PostCode.value),
      propertyType: this.propertyDetailsForm.controls.PropertyType.value,
      tenureType: (this.propertyDetailsForm.controls.tenureType.value),
      userId: (Number)(sessionStorage.getItem(USERID))
    };
    if (!this.recordExist){
      console.log(this.propertyDetails);
      this.propertyDetailsService.getPropertyDetailsPOST(this.propertyDetails).subscribe(
        data => {console.log(data);
        }, err => {console.log(err);
        }
      );
    }else{
      console.log('put ');

      console.log(this.propertyDetails);
      this.propertyDetailsService.getPropertyDetailsPUT(this.propertyDetails).subscribe(
        data => {console.log(data);
        }, err => {console.log(err);
        }
      );
    }


    console.log(this.propertyDetails);
  }
    console.log('Form Value' + this.propertyDetails.isPropertyCovered);

  }
  changeProperty(e: any): void {
    this.propertyDetailsForm.patchValue({propertyBuilt: e.target.value});
  }
  PropertyType(e: any): void{
    this.propertyDetailsForm.patchValue({propertyType: e.target.value});
  }
  propertyOld(e: any): void{
    this.propertyDetailsForm.patchValue({propertyAge: e.target.value});
  }
  changePropertyCovered(e: any): void{
    this.propertyDetailsForm.patchValue({isPropertyCovered: e.target.value});
  }
  changePropertyTenure(e: any): void{
    this.propertyDetailsForm.patchValue({tenureType: e.target.value});
  }

}
interface Response{
  'userId': number;
  'message': string;
}
