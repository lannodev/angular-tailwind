import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingChartCardComponent } from './bidding-chart-card.component';

describe('BiddingChartCardComponent', () => {
  let component: BiddingChartCardComponent;
  let fixture: ComponentFixture<BiddingChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddingChartCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
