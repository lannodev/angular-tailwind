import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BiddingComponent } from './pages/bidding/bidding.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { BiddingSingleCardComponent } from './components/bidding-single-card/bidding-single-card.component';
import { BiddingDualCardComponent } from './components/bidding-dual-card/bidding-dual-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BiddingComponent,
    BiddingSingleCardComponent,
    BiddingDualCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class DashboardModule { }
