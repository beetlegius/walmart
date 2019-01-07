import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { JWT, Auth } from '../../models';
import { AuthService } from '../auth.service';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private authService: AuthService,
    private actions$: Actions
  ) {}

  @Effect()
  authenticate$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.Authenticate),
    map((action: AuthActions.Authenticate) => action.payload),
    mergeMap((auth: Auth) =>
      this.authService.authenticate(auth).pipe(
        map((jwt: JWT) => (new AuthActions.AuthenticateSuccess(jwt))),
        catchError(error => of(new AuthActions.AuthenticateFail(error.message)))
      )
    )
  );

}