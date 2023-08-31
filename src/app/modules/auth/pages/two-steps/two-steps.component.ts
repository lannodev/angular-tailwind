import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-two-steps',
    templateUrl: './two-steps.component.html',
    styleUrls: ['./two-steps.component.scss'],
    standalone: true,
    imports: [FormsModule, RouterLink],
})
export class TwoStepsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
