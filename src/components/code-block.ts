import { Component, Input, Attribute } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';

@Component({
  selector: 'doc-code-block',
  template: `
    <doc-content>
      <doc-p>
        <ng-content></ng-content>
      </doc-p>
      <span class="language">{{ language }}</span>
      <pre><code [innerHtml]="html"></code></pre>
    </doc-content>
  `,
  styles: [`
    @import "https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/themes/prism.css";

    :host {
      display: block;
      box-sizing: border-box;
      margin: 10px 0;
      padding-bottom: 10px;
    }
    demo-paragraph {
      display: block;
      padding-bottom: 8px;
    }
    span {
      background-color: #2980b9;
      color: white;
      font-weight: 700;
      font-size: 9px;
      text-transform: uppercase;
      font-family: 'Open Sans', sans-serif;
      padding: 8px;
      width: 100%;
      display: block;
      box-sizing: border-box;
    }
    pre {
      font-family: 'Inconsolata', monospace;
      line-height: 1.4;
      padding: 16px 12px;
      background-color: white;
      box-sizing: border-box;
    }
  `]
})
export class CodeBlockComponent {
  html: string = '';

  constructor(@Attribute('language') private language: string) { }

  @Input() set code(code: string) {
    this.html = Prism.highlight(code, Prism.languages[this.language]);
  }
}
