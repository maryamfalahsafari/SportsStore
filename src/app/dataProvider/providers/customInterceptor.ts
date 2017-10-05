import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('I am interceptor');
        const changedReq = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        return next.handle(changedReq);
    }

}