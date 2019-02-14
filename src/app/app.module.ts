import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { InfoBoxComponent } from './thumbnail/info-box/info-box.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    InfoBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const customThumbnail = () => createCustomElement(ThumbnailComponent, { injector: this.injector });
    customElements.define('app-thumbnail', customThumbnail);
  }
}
