import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductShellComponent } from './containers/product-shell.component';
import { ProductListComponent } from './components/product-list.component';
import { CategoryListComponent } from './components/category-list.component';

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    CategoryListComponent
  ]
})
export class ProductModule { }