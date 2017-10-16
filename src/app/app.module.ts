import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      { path: "store", loadChildren: "app/store/store.module#StoreModule" },
      { path: "admin", loadChildren: "app/admin/admin.module#AdminModule" },
      { path: "**", redirectTo: "store" }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
