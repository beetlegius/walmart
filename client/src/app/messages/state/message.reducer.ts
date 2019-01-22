import { MessageActionTypes, MessageActions } from './message.actions';
import { Message } from '../../models';

export interface MessageState {
  submitted: boolean;
  messages:  Message[];
  error:     string;
}

const initialState: MessageState = {
  submitted: false,
  messages:  [],
  error:     ''
}

export function reducer(state = initialState, action: MessageActions): MessageState {

  switch (action.type) {
  case MessageActionTypes.LoadSuccess:
    return {
      ...state,
      messages: action.payload,
      error: ''
    }
  case MessageActionTypes.LoadFail:
    return {
      ...state,
      messages: [],
      error: action.payload
    }
  case MessageActionTypes.CreateSuccess:
    return {
      ...state,
      error:     '',
      submitted: false
    }
  case MessageActionTypes.CreateFail:
    return {
      ...state,
      error:     action.payload,
      submitted: false
    }
  case MessageActionTypes.ShowMessage:
    return {
      ...state,
      messages: [...state.messages, action.payload]
    }
  case MessageActionTypes.Submit:
    return {
      ...state,
      submitted: true
    }
  default:
    return state;
  }
  
}