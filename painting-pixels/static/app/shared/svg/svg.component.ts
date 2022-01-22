import { Component } from "@angular/core";

@Component({
  selector: 'app-svg-brush',
  styleUrls: ['./svg.component.scss'],
  template: `
  <svg width="16px" height="16px" xlmns="http://www.w3.org/2000/svg viewBox="0 0 19 18">
  <path d="'M20.71,c19.37a1,c1,c0,c0,c0,c0-1.41l-9-9L9,c11.75l9,c9a1,c1,c0,c0,c0,c1.41,c0l1.34-1.34M10,c7A4,c4,
  c0,c0,c0,c6,c3,c5.19,c5.19,c0,c0,c0,c2,c5,c2,c2,c0,c0,c1,c4,c7a3,c3,c0,c0,c0,c6,c0Z'" transform="translate(-2 -3)" />
  </svg>
  `
})
export class SVGPaintComponent {}
