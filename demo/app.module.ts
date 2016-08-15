import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocComponentsModule } from '../src';

import { DemoAppComponent } from './app.component';


@NgModule({
  imports: [ BrowserModule, DocComponentsModule ],
  providers: [
  ],
  declarations: [ DemoAppComponent ],
  bootstrap: [ DemoAppComponent ]
})
export class DemoModule { }
