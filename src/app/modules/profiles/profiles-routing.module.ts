import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesGridComponent } from './components/profiles-grid/profiles-grid.component'

import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path:'profiles/dashboard',
    component: ProfilesGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
