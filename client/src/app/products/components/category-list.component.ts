import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  @Input() categories: Category[];
  @Output() selected = new EventEmitter<Category>();
  
  constructor() { }

  ngOnInit() {
  }

  select(category: Category) {
    this.selected.emit(category);
  }

}
