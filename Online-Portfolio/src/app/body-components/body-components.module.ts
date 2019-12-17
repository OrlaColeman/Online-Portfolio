import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScrollComponent } from './scroll/scroll.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
import { SmallComponentsModule } from '../small-components/small-components.module';
import { AppRoutingModule } from '../app-routing.module';
import { PrevExpComponent } from './prev-exp/prev-exp.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AboutMeComponent, NavbarComponent, ProjectsComponent, ScrollComponent, SkillsComponent, PrevExpComponent, HomeScreenComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SmallComponentsModule, 
    HttpClientModule
  ],
  exports: [
    AboutMeComponent, 
    NavbarComponent, 
    ProjectsComponent,
    ScrollComponent,
    SkillsComponent,
    PrevExpComponent
  ]
})
export class BodyComponentsModule { }
