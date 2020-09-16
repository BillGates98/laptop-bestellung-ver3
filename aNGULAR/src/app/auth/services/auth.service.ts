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
    console.log(user, 'lol');
    return this.http.post<any>(`${environment.apiUrl}/service/auth`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  isLoggedIn(): any {
    return !!this.getToken();
  }

  getToken(): any {
    return JSON.parse(localStorage.getItem(this.TOKEN));
  }

  private doLoginUser(login: string, tokens: any): any {
    console.log(tokens);
    if (tokens == null) {
      alert('Mauvais identifiant');
      return;
    }
    this.storeTokens(JSON.stringify(tokens));
  }

  private storeTokens(token: string): any {
    localStorage.setItem(this.TOKEN, token);
  }
 
  public getUserInfos(): any {
    return JSON.parse(localStorage.getItem(this.USER_INFOS));
  }

  public getTokens(): any {
    return JSON.parse(localStorage.getItem(this.TOKEN));
  }

  public storeUserInfos(user: any): any {
    localStorage.setItem(this.USER_INFOS, JSON.stringify(user));
  }

  public logout(): boolean {
    localStorage.removeItem(this.TOKEN);
    return true;
  }
}
