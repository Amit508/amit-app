import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';

const routes: Routes = [
  { path: '', component: DashboardLayoutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about' ,component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleDashboardLayoutRoutingModule { }
