import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HttpService } from './core/http-service/http.service';
import { HeaderLayoutComponent } from './feature/header-layout/header-layout.component';
import { FooterLayoutComponent } from './feature/footer-layout/footer-layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpService, HttpClient],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    AppComponent
  ],
})
export class AppModule { }
