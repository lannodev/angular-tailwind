import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSubmenuComponent } from './navbar-submenu.component';

describe('NavbarSubmenuComponent', () => {
  let component: NavbarSubmenuComponent;
  let fixture: ComponentFixture<NavbarSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarSubmenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
