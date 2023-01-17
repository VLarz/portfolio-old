import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroBannerComponent } from './pages/home/sections/hero-banner/hero-banner.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, HeroBannerComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
})
export class AppModule {}
