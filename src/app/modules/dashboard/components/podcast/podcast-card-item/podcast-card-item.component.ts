import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-podcast-card-item',
    templateUrl: './podcast-card-item.component.html',
    standalone: true,
})
export class PodcastCardItemComponent {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';
}
