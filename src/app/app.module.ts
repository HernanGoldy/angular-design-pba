import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './shared/header/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
