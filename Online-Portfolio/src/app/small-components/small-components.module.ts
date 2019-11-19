import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsTimelineComponent } from './skills-timeline/skills-timeline.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SkillsTimelineComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SkillsTimelineComponent
  ]
})
export class SmallComponentsModule { }
