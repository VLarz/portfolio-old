import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroBannerComponent } from './pages/home/sections/hero-banner/hero-banner.component';
import { AboutMeComponent } from './pages/home/sections/about-me/about-me.component';
import { WorkExperienceComponent } from './pages/home/sections/work-experience/work-experience.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, HeroBannerComponent, AboutMeComponent, WorkExperienceComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
})
export class AppModule {}
