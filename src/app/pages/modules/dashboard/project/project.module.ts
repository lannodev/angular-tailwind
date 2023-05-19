import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TuiCalendarModule } from '@taiga-ui/core';
import { TuiTableModule } from '@taiga-ui/addon-table';


@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NgApexchartsModule,
    TuiCalendarModule,
    TuiTableModule
  ]
})
export class ProjectModule { }
