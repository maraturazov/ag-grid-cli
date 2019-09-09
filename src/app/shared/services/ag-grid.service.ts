import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AgGridService {
  constructor(private http: HttpClient) {}

  fetchLists(): Observable<any> {
    return this.http
      .get(environment.urlBackend)
      .pipe();
  }
}
