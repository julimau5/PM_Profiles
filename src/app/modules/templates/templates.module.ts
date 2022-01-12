import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesDashboardComponent } from './templates-dashboard.component';
import { TemplateEditorComponent } from './pages/template-editor/template-editor.component';



@NgModule({
  declarations: [
    TemplatesDashboardComponent,
    TemplateEditorComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
