import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: LayoutComponent,
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'components',
        component: LayoutComponent,
        loadChildren: () => import('../uikit/uikit.module').then((m) => m.UikitModule),
      },
    ]
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
