import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-uikit',
  imports: [RouterOutlet],
  templateUrl: './uikit.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './uikit.component.css',
})
export class UikitComponent {}
