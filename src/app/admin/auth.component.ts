import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css']
})
export class AuthComponent {

    userInfo: any = { username: null, password: null };
    username: string;
    password: string;
    errorMessage: string;

    constructor() {

    }

    ngOnInit() {

    }

    authenticate(form: NgForm) {

    }

}