import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromProducts from './product.reducer';

export interface State extends fromRoot.State {
  products: fromProducts.ProductState;
}

export const getProductsFeatureState = createFeatureSelector<fromProducts.ProductState>('products');

export const getProducts = createSelector(
  getProductsFeatureState,
  state => state.products
)