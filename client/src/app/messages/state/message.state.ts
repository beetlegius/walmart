import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromMessages from './message.reducer';

export interface State extends fromRoot.State {
  messages: fromMessages.MessageState;
}

export const getMessagesFeatureState = createFeatureSelector<fromMessages.MessageState>('messages');

export const getMessages = createSelector(
  getMessagesFeatureState,
  state => state.messages
);

export const getMessagesError = createSelector(
  getMessagesFeatureState,
  state => state.error
);

export const getSubmitted = createSelector(
  getMessagesFeatureState,
  state => state.submitted
);