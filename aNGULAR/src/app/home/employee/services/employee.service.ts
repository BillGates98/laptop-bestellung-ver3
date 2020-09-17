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

  async put(id, data): Promise<any> {
    console.log( data );
    return await this.http.put(`${environment.apiUrl}/service/kunde/${id}`, data).toPromise();
  }

  async gets(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/kunde`).toPromise();
  }

  async getGerateType1(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/Laptop`).toPromise();
  }

  async getKundeForUser(email): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/kunde/${email}/search`).toPromise();
  }

  async getKundeFromParentId(parentId): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/kunde/${parentId}/children`).toPromise();
  }

  async getLaptops(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/Laptop`).toPromise();
  }

}
