import { TestBed } from '@angular/core/testing';

import { PDFhandlerService } from './pdfhandler.service';

describe('PDFhandlerService', () => {
  let service: PDFhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PDFhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
