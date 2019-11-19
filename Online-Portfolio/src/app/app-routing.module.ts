import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { ProjectsComponent } from './body-components/projects/projects.component';
import { SkillsComponent } from './body-components/skills/skills.component';
import { PrevExpComponent } from './body-components/prev-exp/prev-exp.component';
import { SkillsBodyComponent } from './body/skills-body/skills-body.component';

const routes: Routes = [
  {path: '', component:MainBodyComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsBodyComponent},
  {path: 'exp', component: PrevExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
