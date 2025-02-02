import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
  imports: [FormsModule, RouterLink, AngularSvgIconModule, ButtonComponent],
})
export class NewPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
