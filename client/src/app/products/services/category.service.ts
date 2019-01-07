import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  base_url = '/api/categories';

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Category[]> {
    return this.http.get<{ data: Category[] }>(this.base_url)
      .pipe(
        map(response => response.data)
      );
  }

  find(id: number): Observable<Category> {
    return this.http.get<{ data: Category }>(`${this.base_url}/${id}`)
      .pipe(
        map(response => response.data)
      );
  }
}