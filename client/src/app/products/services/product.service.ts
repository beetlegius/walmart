import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  base_url = '/api/products';

  constructor(
    private http: HttpClient
  ) { }

  all(category_id: number | null): Observable<Product[]> {
    return this.http.get<{ data: Product[] }>(`/api/categories/${category_id}/products`)
      .pipe(
        map(response => response.data)
      );
  }

  find(id: number): Observable<Product> {
    return this.http.get<{ data: Product }>(`${this.base_url}/${id}`)
      .pipe(
        map(response => response.data)
      );
  }
}
