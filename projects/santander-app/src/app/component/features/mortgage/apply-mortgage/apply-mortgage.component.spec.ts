import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyMortgageComponent } from './apply-mortgage.component';

describe('ApplyMortgageComponent', () => {
  let component: ApplyMortgageComponent;
  let fixture: ComponentFixture<ApplyMortgageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyMortgageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
