import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFilesComponent } from './current-files.component';

describe('CurrentFilesComponent', () => {
  let component: CurrentFilesComponent;
  let fixture: ComponentFixture<CurrentFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
