import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'dashboards/nfts', component: NftComponent },
      { path: '', redirectTo: 'dashboards/nfts', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboards/nfts', pathMatch: 'full' },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
