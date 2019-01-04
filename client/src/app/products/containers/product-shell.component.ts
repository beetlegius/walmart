import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Observable, of } from 'rxjs';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  categories$: Observable<Category[]>;
  products$: Observable<Product[]>;
  selectedCategory: Category;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.categories$ = this.categoryService.all();
    this.products$   = of([])
  }

  onSelected(category: Category) {
    // dispatch an action SELECT_CATEGORY
    this.selectedCategory = category;
    this.products$ = this.productService.all(category.id);
  }

}
