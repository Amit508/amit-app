import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderLayoutComponent } from './sections/header-layout/header-layout.component';
import { FooterLayoutComponent } from './sections/footer-layout/footer-layout.component';


@NgModule({
  declarations: [MainLayoutComponent, HeaderLayoutComponent, FooterLayoutComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainLayoutModule { }