import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftHeaderComponent } from './nft-header.component';

describe('NftHeaderComponent', () => {
  let component: NftHeaderComponent;
  let fixture: ComponentFixture<NftHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NftHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
