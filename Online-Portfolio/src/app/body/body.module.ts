import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body/main-body.component';
import { BodyComponentsModule } from '../body-components/body-components.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from '../app-routing.module';
import { SkillsBodyComponent } from './skills-body/skills-body.component';
import { ExpBodyComponent } from './exp-body/exp-body.component';

@NgModule({
  declarations: [MainBodyComponent, SkillsBodyComponent, ExpBodyComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BodyComponentsModule,
    MDBBootstrapModule
  ]
})
export class BodyModule { }
