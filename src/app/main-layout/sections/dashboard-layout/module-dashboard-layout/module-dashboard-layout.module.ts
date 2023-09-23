import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleDashboardLayoutRoutingModule } from './module-dashboard-layout-routing.module';
import { DashboardLayoutComponent } from '../dashboard-layout.component';

export const dashboardComponents = [
  DashboardLayoutComponent
];

@NgModule({
  declarations: [ ...dashboardComponents ],
  imports: [
    CommonModule,
    ModuleDashboardLayoutRoutingModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModuleDashboardLayoutModule { }
