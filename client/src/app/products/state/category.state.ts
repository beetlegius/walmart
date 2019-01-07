import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromCategories from './category.reducer';

export interface State extends fromRoot.State {
  categories: fromCategories.CategoryState;
}

export const getCategoriesFeatureState = createFeatureSelector<fromCategories.CategoryState>('categories');

export const getCurrentCategoryId = createSelector(
  getCategoriesFeatureState,
  state => state.currentCategoryId
)

export const getCurrentCategory = createSelector(
  getCategoriesFeatureState,
  getCurrentCategoryId,
  (state, currentCategoryId) => {
    currentCategoryId ?
      state.categories.find(c => c.id == currentCategoryId) :
      null
  }
)

export const getCategories = createSelector(
  getCategoriesFeatureState,
  state => state.categories
);

export const getCategoriesError = createSelector(
  getCategoriesFeatureState,
  state => state.error
);