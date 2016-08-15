import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <doc-wrapper>
      <doc-display-title>Synapse Wireless Labs</doc-display-title>
      <doc-headline>Angular 2 Doc Components</doc-headline>

      <doc-article>
        <doc-p>
          A small set of high quality components for writing single-page documentation
          apps.
        </doc-p>
      </doc-article>

      <doc-code-block code="npm install synlabs-doc-components --save" language="bash">
        Install the package from npm
      </doc-code-block>

      <doc-code-block [code]="tsInstallationExample" language="bash">
        Import the <span class="pre">DocComponentsModule</span> NgModule
      </doc-code-block>


    </doc-wrapper>
  `
})
export class DemoAppComponent {
  tsInstallationExample = require('./examples/installation.ts.txt');
}
