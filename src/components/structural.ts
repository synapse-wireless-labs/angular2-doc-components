import { Component, HostBinding, Attribute } from '@angular/core';


@Component({
  selector: 'doc-wrapper',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    @import 'https://fonts.googleapis.com/css?family=Inconsolata|Open+Sans:300,400,600,700,800';

    :host {
      display: block;
      margin: 0 auto;
      width: 100%;
      min-height: 100vh;
      padding: 40px;
      background-color: #ecf0f1;
      box-sizing: border-box;
    }
  `]
})
export class WrapperComponent { }

@Component({
  selector: 'doc-content',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      width: 100%;
      max-width: 780px;
      margin: 0 auto;
      display: block;
      box-sizing: border-box;
    }
  `]
})
export class ContentComponent { }

@Component({
  selector: 'doc-article',
  template: `
    <doc-content>
      <ng-content></ng-content>
    </doc-content>
  `,
  styles: [`
    /deep/ p {
      padding: 6px 0 0;
    }

    /deep/ demo-paragraph + demo-paragraph p {
      padding-top: 18px;
    }
  `]
})
export class ArticleComponent { }

@Component({
  selector: 'doc-demo',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      background-color: white;
      display: block;
      padding: 20px;
      margin: 10px 0;
    }
  `]
})
export class DemoComponent {
  constructor(@Attribute('theme') private theme: string) { }

  @HostBinding('style.background-color') get bgColor() {
    if (this.theme === 'dark') {
      return '#1e1e1e';
    }

    return 'white';
  }
}

@Component({
  selector: 'doc-panel',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      background-color: #bdc3c7;
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: nowrap;
      flex-flow: center;
      justify-content: center;
      align-items: center;
      margin: 10px;
    }

    :host /deep/ doc-demo {
      margin: 0;
    }
  `]
})
export class PanelComponent { }
