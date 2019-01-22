import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromCategory from '../../state/category.state';
import * as fromProduct from '../../state/product.state';
import * as productActions from '../../state/product.actions';
import * as categoryActions from '../../state/category.actions';
import { Category, Product } from '../../../models';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  categories$:       Observable<Category[]>;
  products$:         Observable<Product[]>;
  errorMessage$:     Observable<string>;

  constructor(
    private store: Store<fromCategory.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new categoryActions.Load());
    this.categories$       = this.store.pipe(select(fromCategory.getCategories));
    this.errorMessage$     = this.store.pipe(select(fromCategory.getCategoriesError));
    this.products$         = this.store.pipe(select(fromProduct.getProducts));
  }

  onSelected(category: Category) {
    this.store.dispatch(new categoryActions.SelectCategory(category));
    this.store.dispatch(new productActions.Load(category.id));
  }

}
