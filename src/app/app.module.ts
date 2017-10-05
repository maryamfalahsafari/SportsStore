import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    SharedModule,
    RouterModule // we have to add this ,because we are using <router-outlet> in app.component template
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
