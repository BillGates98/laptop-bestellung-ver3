import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): any {
    return this.canLoad();
  }

  canLoad(): any {
    // check employee permission
    if (!this.authService.isLoggedIn()) {
     this.router.navigate(['/login']);
    }
    return this.authService.isLoggedIn();
  }
}
