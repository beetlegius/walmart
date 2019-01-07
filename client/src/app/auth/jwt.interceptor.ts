import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromAuth from './state/auth.state';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<fromAuth.State>
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select(fromAuth.getToken),
      mergeMap(token => {
        console.log(token);
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });

        return next.handle(request);
      })
    );
  }

}
