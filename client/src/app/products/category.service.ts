import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  base_url = '/api/categories';

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Category[]> {
    return this.http.get<Category[]>(this.base_url);
  }

  find(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.base_url}/${id}`);
  }
}
