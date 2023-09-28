import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'rama-seed-company', pathMatch: 'full' },
  { path: 'rama-seed-company', loadChildren: () => import("./feature/dashboard-layout/module-dashboard-layout.module").then((m) => m.ModuleDashboardLayoutModule) },
  { path: '**', redirectTo: 'rama-seed-company', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
