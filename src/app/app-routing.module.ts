import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesDashboardComponent } from './modules/profiles/profiles-dashboard.component';
import { TemplatesDashboardComponent } from './modules/templates/templates-dashboard.component';

const routes: Routes = [
  {
    path:'profiles',
    component: ProfilesDashboardComponent
  },
  {
    path:'templates-dashboard',
    component: TemplatesDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
