import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepsComponent } from './two-steps.component';

describe('TwoStepsComponent', () => {
  let component: TwoStepsComponent;
  let fixture: ComponentFixture<TwoStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TwoStepsComponent],
}).compileComponents();

    fixture = TestBed.createComponent(TwoStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
