import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromAuth from './auth.reducer';

export interface State extends fromRoot.State {
  categories: fromAuth.AuthState;
}

export const getAuthFeatureState = createFeatureSelector<fromAuth.AuthState>('auth');

export const getToken = createSelector(
  getAuthFeatureState,
  state => state.token
)

export const getCurrentUser = createSelector(
  getAuthFeatureState,
  (state) => state.currentUser
)

export const getAuthenticationError = createSelector(
  getAuthFeatureState,
  state => state.error
);