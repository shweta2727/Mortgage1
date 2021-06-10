import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortageLandingComponent } from './mortage-landing.component';

describe('MortageLandingComponent', () => {
  let component: MortageLandingComponent;
  let fixture: ComponentFixture<MortageLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortageLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
