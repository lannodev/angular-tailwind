import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BiddingComponent } from './pages/bidding/bidding.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BiddingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class DashboardModule { }
