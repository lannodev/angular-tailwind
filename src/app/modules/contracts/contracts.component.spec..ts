import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  ContractsComponent } from './contracts.component.';

describe('ErrorComponent', () => {
  let component: ContractsComponent;
  let fixture: ComponentFixture<ContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
