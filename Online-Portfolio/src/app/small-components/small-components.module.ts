import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsTimelineComponent } from './skills-timeline/skills-timeline.component';
import { AppRoutingModule } from '../app-routing.module';
import { AusComponent } from './aus/aus.component';
import { AfricaComponent } from './africa/africa.component';
import { UsaComponent } from './usa/usa.component';
import { EuropeComponent } from './europe/europe.component';

@NgModule({
  declarations: [SkillsTimelineComponent, AusComponent, AfricaComponent, UsaComponent, EuropeComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SkillsTimelineComponent,
    AusComponent, 
    AfricaComponent, 
    UsaComponent, 
    EuropeComponent
  ]
})
export class SmallComponentsModule { }
