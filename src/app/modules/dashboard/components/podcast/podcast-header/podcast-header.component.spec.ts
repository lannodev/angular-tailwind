import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastHeaderComponent } from './podcast-header.component';

describe('PodcastHeaderComponent', () => {
  let component: PodcastHeaderComponent;
  let fixture: ComponentFixture<PodcastHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PodcastHeaderComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PodcastHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
