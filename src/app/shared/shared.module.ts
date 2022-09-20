import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHelperComponent } from './components/responsive-helper/responsive-helper.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [ResponsiveHelperComponent, ClickOutsideDirective],
  imports: [CommonModule],
  exports: [ResponsiveHelperComponent, ClickOutsideDirective],
})
export class SharedModule {}
