import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextTitleComponent } from './components/atoms/text-title/text-title.component';
import { TextBasicTitleComponent } from './components/atoms/text-basic-title/text-basic-title.component';
import { TextBasicComponent } from './components/atoms/text-basic/text-basic.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { FaqComponentComponent } from './components/organisms/faq-component/faq-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextTitleComponent,
    TextBasicTitleComponent,
    TextBasicComponent,
    FaqPageComponent,
    ImageComponent,
    FaqComponentComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
