import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstModule } from './first';

import { AppComponent } from './app.component';
import { SecondModule } from './second';
import { AppPrimeModule, LibModule, SharedModule } from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FirstModule,
    SecondModule,
    LibModule,
    AppPrimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
