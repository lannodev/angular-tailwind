import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActionComponent } from './table-action.component';

describe('TableActionComponent', () => {
  let component: TableActionComponent;
  let fixture: ComponentFixture<TableActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
