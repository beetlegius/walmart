import { AuthActionTypes, AuthActions } from './auth.actions';
import { User } from '../../models';

export interface AuthState {
  error:       string;
  token:       string;
  currentUser: User;
}

const initialState: AuthState = {
  error:       '',
  token:       '',
  currentUser: null
}

export function reducer(state = initialState, action: AuthActions): AuthState {

  switch (action.type) {
  case AuthActionTypes.AuthenticateSuccess:
    return {
      ...state,
      token: action.payload.jwt,
      error: ''
    }
  case AuthActionTypes.AuthenticateFail:
    return {
      ...state,
      currentUser: null,
      token: '',
      error: action.payload
    }
  case AuthActionTypes.LogoutSuccess:
    return {
      ...state,
      currentUser: null,
      token: '',
      error: ''
    }
  default:
    return state;
  }
  
}