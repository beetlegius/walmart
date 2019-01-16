import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = '/api/messages';
  
  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl);
  }

  create(message: Message): Observable<Message> {
    return this.http.post<Message>(this.baseUrl, { message: message });
  }
}
