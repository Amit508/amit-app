import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'rama-seed-company/home', pathMatch: 'full' },
  { path: 'rama-seed-company/home', loadChildren: () => import("./main-layout/main-layout.module").then((m) => m.MainLayoutModule) },
  { path: '**', redirectTo: 'rama-seed-company/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
