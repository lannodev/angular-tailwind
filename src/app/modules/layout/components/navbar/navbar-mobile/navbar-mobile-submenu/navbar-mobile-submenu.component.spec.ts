import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMobileSubmenuComponent } from './navbar-mobile-submenu.component';

describe('NavbarMobileSubmenuComponent', () => {
  let component: NavbarMobileSubmenuComponent;
  let fixture: ComponentFixture<NavbarMobileSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMobileSubmenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMobileSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
