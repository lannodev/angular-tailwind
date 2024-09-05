import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuService } from '../../services/menu.service';
import { SidebarComponent } from './sidebar.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let menuService: MenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SidebarComponent],
    providers: [
      { provide: MenuService, useValue: { toggleSidebar: () => {}, pagesMenu: of([]), addMenuItem: () => {} } },
      { provide: Router, useValue: { events: of({}) } }
    ]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    menuService = TestBed.inject(MenuService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

