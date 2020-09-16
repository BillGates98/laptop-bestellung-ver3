import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  async post(data): Promise<any> {
    return await this.http.post(`${environment.apiUrl}/users`, data).toPromise();
  }

  async put(data): Promise<any> {
    return await this.http.put(`${environment.apiUrl}/users`, data).toPromise();
  }

  async getData(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}`).toPromise();
  }

}
