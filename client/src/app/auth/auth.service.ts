import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JWT, Auth } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path = '/api/user_token';

  constructor(
    private http: HttpClient
  ) { }

  authenticate(auth: Auth): Observable<JWT> {
    return this.http
      .post<JWT>(
        this.path,
        { auth: auth }
      );
  }
}
