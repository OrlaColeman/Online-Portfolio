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
import { AppRoutingModule } from '../app-routing.module';
import { PrevExpComponent } from './prev-exp/prev-exp.component';

@NgModule({
  declarations: [AboutMeComponent, NavbarComponent, ProjectsComponent, ScrollComponent, SkillsComponent, PrevExpComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    SmallComponentsModule
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
