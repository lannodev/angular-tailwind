import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftChartCardComponent } from './nft-chart-card.component';

describe('NftChartCardComponent', () => {
  let component: NftChartCardComponent;
  let fixture: ComponentFixture<NftChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NftChartCardComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
