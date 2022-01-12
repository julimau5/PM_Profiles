import { Component, OnInit } from '@angular/core';
import { PDFhandlerService } from './services/pdfhandler.service';

@Component({
  selector: 'app-templates-dashboard',
  templateUrl: './templates-dashboard.component.html',
  styleUrls: ['./templates-dashboard.component.scss']
})
export class TemplatesDashboardComponent implements OnInit {

  constructor(
    private pdfHandler: PDFhandlerService
  ) { }

  ngOnInit(): void {
  }

}
