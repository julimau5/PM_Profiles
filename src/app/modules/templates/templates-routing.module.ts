import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesDashboardComponent } from './templates-dashboard.component';


const routes: Routes = [
  // {
  //   path:'templates-module',
  //   component: TemplatesDashboardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
