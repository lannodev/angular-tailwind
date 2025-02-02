import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [AngularSvgIconModule, RouterOutlet],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
