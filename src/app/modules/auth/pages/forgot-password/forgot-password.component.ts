import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    standalone: true,
    imports: [FormsModule, RouterLink],
})
export class ForgotPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
