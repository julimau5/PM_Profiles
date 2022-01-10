import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import { ProfilesGridComponent } from './components/profiles-grid/profiles-grid.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfilesDashboardComponent } from './profiles-dashboard.component';
import { ProfilesRoutingModule } from './profiles-routing.module';




@NgModule({
  declarations: [
    ProfilesGridComponent,
    ProfileCardComponent,
    ProfilesDashboardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    ProfilesRoutingModule,
    MatGridListModule
  ]
})
export class ProfilesModule { }
