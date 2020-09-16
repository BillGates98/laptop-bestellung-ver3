import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  async post(data): Promise<any> {
    return await this.http.post(`${environment.apiUrl}/service/kunde`, data).toPromise();
  }

  async put(id): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/kunde/${id}`).toPromise();
  }

  async gets(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/kunde`).toPromise();
  }

  async getGerateType1(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/Laptop`).toPromise();
  }

}
