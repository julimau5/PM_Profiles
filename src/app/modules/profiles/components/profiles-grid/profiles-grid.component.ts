import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles-grid',
  templateUrl: './profiles-grid.component.html',
  styleUrls: ['./profiles-grid.component.scss'],
})
export class ProfilesGridComponent implements OnInit {
  public breakpoint: any;

  constructor() {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }
}
