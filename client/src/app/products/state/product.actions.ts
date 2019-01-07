import { Action } from '@ngrx/store';
import { Product } from '../../models';

export enum ProductActionTypes {
  Load        = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail    = '[Product] Load Fail'
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;

  constructor(public payload: number) {}
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export type ProductActions = Load
  | LoadSuccess
  | LoadFail