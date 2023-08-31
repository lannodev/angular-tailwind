import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMobileComponent } from './navbar-mobilecomponent';

describe('NavbarMobileComponent', () => {
  let component: NavbarMobileComponent;
  let fixture: ComponentFixture<NavbarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NavbarMobileComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
