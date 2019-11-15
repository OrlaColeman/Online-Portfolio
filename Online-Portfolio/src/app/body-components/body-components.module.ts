import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScrollComponent } from './scroll/scroll.component';

@NgModule({
  declarations: [AboutMeComponent, NavbarComponent, ProjectsComponent, ScrollComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AboutMeComponent, 
    NavbarComponent, 
    ProjectsComponent,
    ScrollComponent
  ]
})
export class BodyComponentsModule { }
