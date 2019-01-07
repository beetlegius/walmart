import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
