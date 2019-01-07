import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { Product } from '../../models';
import { ProductService } from '../services';

import * as productActions from './product.actions';

@Injectable()
export class ProductEffects {

  constructor(
    private productService: ProductService,
    private actions$: Actions
  ) {}

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Load),
    map((action: productActions.Load) => action.payload),
    mergeMap((id: number) =>
      this.productService
      .all(id)
      .pipe(
        map(
          (products: Product[]) =>
            new productActions.LoadSuccess(products)
        ),
        catchError(error => of(new productActions.LoadFail(error)))
      )
    )
  );

}