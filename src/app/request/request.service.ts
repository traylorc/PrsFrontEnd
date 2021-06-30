import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string = "http://localhost:45153/api/requests"

  constructor(private http: HttpClient) { }

  list(): Observable<Request[]>
  {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }
  getByPk(id: number): Observable<Request>
  {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  create(request: Request): Observable<Request>
  {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
  }
  edit(request: Request): Observable<Request>
  {
    return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<Request>;
  }
  remove(id:number): Observable<Request>
  {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Request>;
  }
}
