import { Action } from '@ngrx/store';

import { JWT, Auth } from '../../models';

export enum AuthActionTypes {
  Authenticate        = '[Auth] Authenticate',
  AuthenticateSuccess = '[Auth] Authenticate success',
  AuthenticateFail    = '[Auth] Authenticate fail',
  Logout              = '[Auth] Logout',
  LogoutSuccess       = '[Auth] Logout success'
}

export class Authenticate implements Action {
  readonly type = AuthActionTypes.Authenticate;

  constructor(public payload: Auth) {}
}

export class AuthenticateSuccess implements Action {
  readonly type = AuthActionTypes.AuthenticateSuccess;

  constructor(public payload: JWT) {}
}

export class AuthenticateFail implements Action {
  readonly type = AuthActionTypes.AuthenticateFail;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
}

export type AuthActions = Authenticate
  | AuthenticateSuccess
  | AuthenticateFail
  | Logout
  | LogoutSuccess