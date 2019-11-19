import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { ProjectsComponent } from './body-components/projects/projects.component';

const routes: Routes = [
  {path: '', component:MainBodyComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
