import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { ProjectsComponent } from './body-components/projects/projects.component';
import { SkillsBodyComponent } from './body/skills-body/skills-body.component';
import { ExpBodyComponent } from './body/exp-body/exp-body.component';

const routes: Routes = [
  {path: '', component:MainBodyComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsBodyComponent},
  {path: 'exp', component: ExpBodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
