import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      { path: '', redirectTo: '404', pathMatch: 'full' },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
