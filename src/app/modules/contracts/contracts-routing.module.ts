import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './contracts.component.'; 

import { NewPageComponent } from './pages/new-page/new-page.component'; 

const routes: Routes = [
  {
    path: '',
    component: ContractsComponent,
    children: [
      { path: 'new-page', component: NewPageComponent }, 
      { path: '', redirectTo: 'new-page', pathMatch: 'full' }, 
      { path: '**', redirectTo: 'new-page' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule {}


