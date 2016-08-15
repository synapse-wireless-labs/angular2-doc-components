import 'core-js/es6';
import 'core-js/es7/reflect';
import 'ts-helpers';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoModule } from './app.module';



platformBrowserDynamic().bootstrapModule(DemoModule);
