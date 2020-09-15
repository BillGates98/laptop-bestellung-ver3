import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SupportGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): any {
    return this.canLoad();
  }

  canLoad(): any {
    // check admin permission
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    const token = this.authService.getToken().userId;
    // return token === 'demo' && this.authService.isLoggedIn() ? true : false;
    return true;
  }
}
