import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl: string = "http://localhost:45153/api/requestlines"

  constructor(private http: HttpClient) { }

  list(): Observable<Requestline[]>
  {
    return this.http.get(`${this.baseurl}`) as Observable<Requestline[]>;
  }
  getByPk(id: number): Observable<Requestline>
  {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
  create(request: Requestline): Observable<Requestline>
  {
    return this.http.post(`${this.baseurl}`, request) as Observable<Requestline>;
  }
  edit(request: Requestline): Observable<Requestline>
  {
    return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<Requestline>;
  }
  remove(id:number): Observable<Requestline>
  {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
}
