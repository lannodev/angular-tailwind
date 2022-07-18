import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingSingleCardComponent } from './bidding-single-card.component';

describe('BiddingSingleCardComponent', () => {
  let component: BiddingSingleCardComponent;
  let fixture: ComponentFixture<BiddingSingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddingSingleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
