import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleDashboardLayoutRoutingModule } from './module-dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';

export const dashboardComponents = [
  DashboardLayoutComponent,
  ProductsComponent,
  AboutComponent
];

@NgModule({
  declarations: [ ...dashboardComponents ],
  imports: [
    CommonModule,
    ModuleDashboardLayoutRoutingModule
  ],
  exports: [
    CommonModule,
    ModuleDashboardLayoutRoutingModule
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModuleDashboardLayoutModule { }
