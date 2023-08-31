import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastListComponent } from './podcast-list.component';

describe('PodcastListComponent', () => {
  let component: PodcastListComponent;
  let fixture: ComponentFixture<PodcastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PodcastListComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PodcastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
