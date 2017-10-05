import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { StoreComponent } from './store.component';
import { CheckoutComponent } from './checkout.component';
import { CartDetailComponent } from './cartDetail.component';
import { DataProviderModule } from '../dataProvider/dataProvider.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        StoreComponent,
        CheckoutComponent,
        CartDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        DataProviderModule,
        SharedModule,
        RouterModule.forRoot([
            { path: "store", component: StoreComponent },
            { path: "cart", component: CartDetailComponent },
            { path: "checkout", component: CheckoutComponent },
            { path: "**", redirectTo: "/store" }])
    ],
    exports: [
        StoreComponent,
        CheckoutComponent,
        CartDetailComponent
    ]
})
export class StoreModule {

}