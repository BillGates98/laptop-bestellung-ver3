import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  async post(data, taskId): Promise<any> {
    console.log('Ready to send', taskId, ' ===== ', data);
    // const body = new HttpParams()
    // .set('username', user.username)
    // .set('password', user.password);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    // return this.http.post<any>(`${environment.apiUrl}/camunda/api/admin/auth/user/default/login/welcome`, body.toString(),
    //   {headers: headers})
    //   .pipe(
    //     tap(tokens => this.doLoginUser(user.username, tokens)),
    //     mapTo(true),
    //     catchError(error => {
    //       return of(false);
    //     }));
    return await this.http.post(`${environment.apiUrl}/camunda/api/engine/engine/default/task/${taskId}/submit-form`, data).toPromise();
  }

  async getTaskIdentification(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}/camunda/api/engine/engine/default/task`).toPromise();
  }

  async put(data): Promise<any> {
    console.log(data);
    // const body = new HttpParams()
    // .set('username', user.username)
    // .set('password', user.password);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    // return this.http.post<any>(`${environment.apiUrl}/camunda/api/admin/auth/user/default/login/welcome`, body.toString(),
    //   {headers: headers})
    //   .pipe(
    //     tap(tokens => this.doLoginUser(user.username, tokens)),
    //     mapTo(true),
    //     catchError(error => {
    //       return of(false);
    //     }));
    return await this.http.put(`${environment.apiUrl}/users`, data).toPromise();
  }

  async getData(): Promise<any> {
    return await this.http.get(`${environment.apiUrl}`).toPromise();
  }

}
