import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [FormsModule, RouterLink, AngularSvgIconModule, ButtonComponent],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
