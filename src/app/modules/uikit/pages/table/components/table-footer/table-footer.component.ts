import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-table-footer',
  imports: [AngularSvgIconModule],
  templateUrl: './table-footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './table-footer.component.css',
})
export class TableFooterComponent {}
