import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BiddingComponent } from './pages/bidding/bidding.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { BiddingSingleCardComponent } from './components/bidding/bidding-single-card/bidding-single-card.component';
import { BiddingDualCardComponent } from './components/bidding/bidding-dual-card/bidding-dual-card.component';
import { BiddingChartCardComponent } from './components/bidding/bidding-chart-card/bidding-chart-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    DashboardComponent,
    BiddingComponent,
    BiddingSingleCardComponent,
    BiddingDualCardComponent,
    BiddingChartCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot(),
  ]
})
export class DashboardModule { }
