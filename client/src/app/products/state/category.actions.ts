import { Action } from '@ngrx/store';
import { Category } from '../../models';

export enum CategoryActionTypes {
  Load           = '[Category] Load',
  LoadSuccess    = '[Category] Load Success',
  LoadFail       = '[Category] Load Fail',
  SelectCategory = '[Category] Select'
}

export class Load implements Action {
  readonly type = CategoryActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CategoryActionTypes.LoadSuccess;

  constructor(public payload: Category[]) {}
}

export class LoadFail implements Action {
  readonly type = CategoryActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export class SelectCategory implements Action {
  readonly type = CategoryActionTypes.SelectCategory;

  constructor(public payload: Category) {}
}

export type CategoryActions = Load
  | LoadSuccess
  | LoadFail
  | SelectCategory