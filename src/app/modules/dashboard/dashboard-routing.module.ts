import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BiddingComponent } from './pages/bidding/bidding.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'dashboards/bidding', component: BiddingComponent },
      { path: '', redirectTo: 'dashboards/bidding', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboards/bidding', pathMatch: 'full' },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
