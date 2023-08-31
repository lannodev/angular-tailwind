import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastCardItemComponent } from './podcast-card-item.component';

describe('PodcastCardItemComponent', () => {
  let component: PodcastCardItemComponent;
  let fixture: ComponentFixture<PodcastCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PodcastCardItemComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PodcastCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
