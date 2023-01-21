import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/home/sections/about-me/about-me.component';
import { HeroBannerComponent } from './pages/home/sections/hero-banner/hero-banner.component';
import { MyProjectsComponent } from './pages/home/sections/my-projects/my-projects.component';
import { TechnicalSkillsComponent } from './pages/home/sections/technical-skills/technical-skills.component';
import { WorkExperienceComponent } from './pages/home/sections/work-experience/work-experience.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeroBannerComponent,
        AboutMeComponent,
        WorkExperienceComponent,
        TechnicalSkillsComponent,
        MyProjectsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CommonModule],
})
export class AppModule {}
