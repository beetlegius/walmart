import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { Category } from '../../models';
import { CategoryService } from '../services';

import * as categoryActions from './category.actions';

@Injectable()
export class CategoryEffects {

  constructor(
    private categoryService: CategoryService,
    private actions$: Actions
  ) {}

  @Effect()
  loadCategories$: Observable<Action> = this.actions$.pipe(
    ofType(categoryActions.CategoryActionTypes.Load),
    mergeMap(action =>
      this.categoryService.all().pipe(
        map((categories: Category[]) => (new categoryActions.LoadSuccess(categories))),
        catchError(err => of(new categoryActions.LoadFail(err)))
      )
    )
  );

}