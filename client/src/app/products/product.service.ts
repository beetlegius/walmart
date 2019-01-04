import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  base_url = '/api/products'

  constructor(
    private http: HttpClient
  ) { }

  all(category_id: number | null): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/categories/${category_id}/products`);
  }

  find(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.base_url}/${id}`);
  }
}
