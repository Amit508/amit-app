import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { ProductsComponent } from './sections/products/products.component';
import { AboutComponent } from './sections/about/about.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', loadChildren: () => import("./sections/dashboard-layout/module-dashboard-layout/module-dashboard-layout.module").then((m) => m.ModuleDashboardLayoutModule) },
  ]},
  { path: 'products', component: ProductsComponent },
  { path: 'about' ,component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
