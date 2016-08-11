import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CodeBlockComponent } from './components/code-block';

import {
  WrapperComponent,
  ContentComponent,
  ArticleComponent,
  DemoComponent,
  PanelComponent
} from './components/structural';

import {
  DisplayTitleComponent,
  HeadlineComponent,
  TitleComponent,
  SubheadingComponent,
  PComponent
} from './components/typography';




@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    CodeBlockComponent,
    WrapperComponent,
    ContentComponent,
    ArticleComponent,
    DemoComponent,
    PanelComponent,
    DisplayTitleComponent,
    HeadlineComponent,
    TitleComponent,
    SubheadingComponent,
    PComponent
  ],
  exports: [
    CodeBlockComponent,
    WrapperComponent,
    ContentComponent,
    ArticleComponent,
    DemoComponent,
    PanelComponent,
    DisplayTitleComponent,
    HeadlineComponent,
    TitleComponent,
    SubheadingComponent,
    PComponent
  ]
})
export class DocComponentsModule { }


export {
  CodeBlockComponent,
  WrapperComponent,
  ContentComponent,
  ArticleComponent,
  DemoComponent,
  PanelComponent,
  DisplayTitleComponent,
  HeadlineComponent,
  TitleComponent,
  SubheadingComponent,
  PComponent
}
