import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingDualCardComponent } from './nft-dual-card.component';

describe('BiddingDualCardComponent', () => {
  let component: BiddingDualCardComponent;
  let fixture: ComponentFixture<BiddingDualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiddingDualCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingDualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
