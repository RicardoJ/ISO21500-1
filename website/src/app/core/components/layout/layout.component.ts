import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <ng-content select="[header]"></ng-content>
    
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
