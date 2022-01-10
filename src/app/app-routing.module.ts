import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesDashboardComponent } from './modules/profiles/profiles-dashboard.component';

const routes: Routes = [
  {
    path:'profiles',
    component: ProfilesDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
