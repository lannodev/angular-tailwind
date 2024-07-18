import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
