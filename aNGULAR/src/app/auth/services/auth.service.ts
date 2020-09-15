import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Tokens } from '../models/tokens';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN = 'TOKEN';
  private readonly USER_INFOS = 'USER_INFOS';

  constructor(private http: HttpClient) {}

  login(user: { username: string, password: string }): Observable<boolean> {
    console.log( `${environment.apiUrl}/camunda/api/admin/auth/user/default/login/welcome` );
    const body = new HttpParams()
    .set('username', user.username)
    .set('password', user.password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post<any>(`${environment.apiUrl}/camunda/api/admin/auth/user/default/login/welcome`, body.toString(), 
      {headers: headers})
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.TOKEN));
  }

  private doLoginUser(login: string, tokens: any) {
    console.log(tokens);
    this.storeTokens(JSON.stringify(tokens));
  }

  private storeTokens(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }
 
  public getUserInfos() {
    return JSON.parse(localStorage.getItem(this.USER_INFOS));
  }

  public getTokens() {
    return JSON.parse(localStorage.getItem(this.TOKEN));
  }

  public storeUserInfos(user: any) {
    localStorage.setItem(this.USER_INFOS, JSON.stringify(user));
  }

  public logout(): boolean {
    localStorage.removeItem(this.TOKEN);
    return true;
  }
}
