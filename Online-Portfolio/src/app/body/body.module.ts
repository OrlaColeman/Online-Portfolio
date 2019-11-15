import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body/main-body.component';
import { BodyComponentsModule } from '../body-components/body-components.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [MainBodyComponent],
  imports: [
    CommonModule,
    BodyComponentsModule,
    MDBBootstrapModule
  ]
})
export class BodyModule { }
