import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.all().subscribe(
      categories => this.categories = categories
    )
  }

}
