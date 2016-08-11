import { Component, Input } from '@angular/core';

@Component({
  selector: 'doc-display-title',
  template: `
    <doc-content>
      <h1>
        <ng-content></ng-content>
      </h1>
    </doc-content>
  `,
  styles: [`
    h1 {
      font-family: 'Open Sans', sans-serif;
      color: #3498db;
      font-weight: 300;
      font-size: 38px;
      padding-bottom: 40px;
    }
  `]
})
export class DisplayTitleComponent { }

@Component({
  selector: 'doc-headline',
  template: `
    <doc-content>
      <h2>
        <ng-content></ng-content>
      </h2>
    </doc-content>
  `,
  styles: [`
    h2 {
      font-weight: normal;
      font-family: 'Open Sans', sans-serif;
      color: #1f1f1f;
      font-size: 24px;
      padding-bottom: 20px;
    }
  `]
})
export class HeadlineComponent { }

@Component({
  selector: 'doc-title',
  template: `
    <doc-content>
      <h3>
        <ng-content></ng-content>
      </h3>
    </doc-content>
  `,
  styles: [`
    h3 {
      font-family: 'Open Sans', sans-serif;
      color: #1f1f1f;
      font-size: 20px;
      font-weight: 600;
      padding-top: 24px;
    }
  `]
})
export class TitleComponent { }

@Component({
  selector: 'doc-subheading',
  template: `
    <doc-content>
      <h4>
        <ng-content></ng-content>
      </h4>
    </doc-content>
  `,
  styles: [`
    h4 {
      font-family: 'Open Sans', sans-serif;
      color: #1f1f1f;
      font-size: 16px;
      font-weight: 40;
      padding-top: 12px;
    }
  `]
})
export class SubheadingComponent { }

@Component({
  selector: 'doc-p',
  template: `
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: [`
    :host {
      display: block;
      padding-bottom: 12px;
    }

    p {
      font-family: 'Open Sans', sans-serif;
      font-size: 13px;
      color: #1f1f1f;
      line-height: 1.5;
    }

    :host /deep/ span.pre {
      display: inline;
      font-family: 'Inconsolata', monospace;
      background-color: white;
      padding: 4px 8px;
      margin: 0 4px;
      font-size: 12px;
    }
  `]
})
export class PComponent { }
