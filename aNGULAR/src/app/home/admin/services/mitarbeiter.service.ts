import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MitarbeiterService {

  constructor(private http: HttpClient) {}

  async post(data): Promise<any> {
    return await this.http.post(`${environment.apiUrl}/service/mitarbeiter`, data).toPromise();
  }

  async put(id, data): Promise<any> {
    return await this.http.put(`${environment.apiUrl}/service/mitarbeiter/${id}`, data).toPromise();
  }

  async gets(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/mitarbeiter`).toPromise();
  }

  async getUserParents(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/mitarbeiter/parents`).toPromise();
  }

  async getChildren(id): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/service/mitarbeiter/${id}/children`).toPromise();
  }

}
