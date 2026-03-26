import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UikitHeaderComponent } from './uikit-header.component';

describe('UikitHeaderComponent', () => {
  let component: UikitHeaderComponent;
  let fixture: ComponentFixture<UikitHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UikitHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UikitHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
