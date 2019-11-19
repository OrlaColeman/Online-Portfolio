import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsTimelineComponent } from './skills-timeline/skills-timeline.component';

@NgModule({
  declarations: [SkillsTimelineComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SkillsTimelineComponent
  ]
})
export class SmallComponentsModule { }
