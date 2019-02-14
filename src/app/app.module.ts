import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { InfoBoxComponent } from './thumbnail/info-box/info-box.component';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
