import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';

@NgModule({
    declarations: [
        AdminComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'auth', component: AuthComponent },
            { path: 'main', component: AdminComponent },
            { path: "**", redirectTo: "auth" }
        ])
    ],
   // exports:[AdminComponent]
})
export class AdminModule {

}