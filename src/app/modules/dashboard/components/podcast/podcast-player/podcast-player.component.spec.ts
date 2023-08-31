import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPlayerComponent } from './podcast-player.component';

describe('PodcastPlayerComponent', () => {
  let component: PodcastPlayerComponent;
  let fixture: ComponentFixture<PodcastPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PodcastPlayerComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PodcastPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
