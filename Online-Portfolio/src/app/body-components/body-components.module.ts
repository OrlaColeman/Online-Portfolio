import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScrollComponent } from './scroll/scroll.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
import { SmallComponentsModule } from '../small-components/small-components.module';

@NgModule({
  declarations: [AboutMeComponent, NavbarComponent, ProjectsComponent, ScrollComponent, SkillsComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    SmallComponentsModule
  ],
  exports: [
    AboutMeComponent, 
    NavbarComponent, 
    ProjectsComponent,
    ScrollComponent,
    SkillsComponent
  ]
})
export class BodyComponentsModule { }
