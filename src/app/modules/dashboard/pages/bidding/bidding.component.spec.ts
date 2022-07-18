import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingComponent } from './bidding.component';

describe('BiddingComponent', () => {
  let component: BiddingComponent;
  let fixture: ComponentFixture<BiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
