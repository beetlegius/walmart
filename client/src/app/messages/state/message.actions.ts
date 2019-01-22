import { Action } from '@ngrx/store';
import { Message } from '../../models';

export enum MessageActionTypes {
  Load           = '[Message] Load',
  LoadSuccess    = '[Message] Load Success',
  LoadFail       = '[Message] Load Fail',
  ShowMessage    = '[Message] Show Message',
  Create         = '[Message] Create',
  CreateSuccess  = '[Message] Create Success',
  CreateFail     = '[Message] Create Fail',
  Submit         = '[Message] Submit'
}

export class Load implements Action {
  readonly type = MessageActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = MessageActionTypes.LoadSuccess;

  constructor(public payload: Message[]) {}
}

export class LoadFail implements Action {
  readonly type = MessageActionTypes.LoadFail;
  
  constructor(public payload: string) {}
}

export class ShowMessage implements Action {
  readonly type = MessageActionTypes.ShowMessage;

  constructor(public payload: Message) {}
}

export class Create implements Action {
  readonly type = MessageActionTypes.Create;

  constructor(public payload: Message) {}
}

export class CreateSuccess implements Action {
  readonly type = MessageActionTypes.CreateSuccess;

  constructor(public payload: Message) {}
}

export class CreateFail implements Action {
  readonly type = MessageActionTypes.CreateFail;

  constructor(public payload: string) {}
}

export class Submit implements Action {
  readonly type = MessageActionTypes.Submit;
}

export type MessageActions = Load
  | LoadSuccess
  | LoadFail
  | ShowMessage
  | Create
  | CreateSuccess
  | CreateFail
  | Submit