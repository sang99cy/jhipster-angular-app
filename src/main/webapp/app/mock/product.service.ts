import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = enviroment.apiUrl;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }
}
