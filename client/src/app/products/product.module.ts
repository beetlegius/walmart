import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductShellComponent } from './containers/product-shell/product-shell.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

import { reducer as productReducer } from './state/product.reducer';
import { reducer as categoryReducer } from './state/category.reducer';
import { CategoryEffects } from './state/category.effects';
import { ProductEffects } from './state/product.effects';

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('categories', categoryReducer),
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature(
      [ ProductEffects, CategoryEffects ]
    )
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    CategoryListComponent
  ]
})
export class ProductModule { }