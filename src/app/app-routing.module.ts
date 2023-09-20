import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'rama-seed-company', pathMatch: 'full' },
  { path: 'rama-seed-company', component: DashboardComponent },
  { path: '**', redirectTo: 'rama-seed-company', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: window['_app_base'] || '/'}]
})
export class AppRoutingModule { }
