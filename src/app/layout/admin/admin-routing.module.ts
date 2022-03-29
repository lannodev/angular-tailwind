import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { CurrentFilesComponent } from './pages/current-files/current-files.component';
import { TrashComponent } from './pages/trash/trash.component';
import { DownloadComponent } from './pages/download/download.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'books/current-files', component: CurrentFilesComponent },
      { path: 'books/download', component: DownloadComponent },
      { path: 'books/trash', component: TrashComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
