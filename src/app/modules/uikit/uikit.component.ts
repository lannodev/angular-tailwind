import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-uikit',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './uikit.component.html',
  styleUrl: './uikit.component.scss',
})
export class UikitComponent {}
