import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyUnlessDirective } from './myUnless.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [MyUnlessDirective],
    exports: [MyUnlessDirective]
})
export class SharedModule {

}