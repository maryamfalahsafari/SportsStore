import { NgModule } from '@angular/core';

import { MyUnlessDirective } from './myUnless.directive';

@NgModule({
    declarations: [MyUnlessDirective],
    exports: [MyUnlessDirective]
})
export class SharedModule {

}