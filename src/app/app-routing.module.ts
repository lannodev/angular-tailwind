import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./layout/admin/admin.module').then((m) => m.AdminModule),
	},
	{ path: '**', redirectTo: 'error/404' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
