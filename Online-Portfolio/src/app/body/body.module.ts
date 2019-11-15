import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body/main-body.component';
import { BodyComponentsModule } from '../body-components/body-components.module';

@NgModule({
  declarations: [MainBodyComponent],
  imports: [
    CommonModule,
    BodyComponentsModule
  ]
})
export class BodyModule { }
