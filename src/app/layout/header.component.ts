import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .nav-bg-color {
        background-color: #649cdd !important;
        color: #0f33b4 !important;
        margin-bottom: -2px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
