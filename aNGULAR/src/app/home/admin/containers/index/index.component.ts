import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isAuthenticated = false;
  subscription: Subscription;
  translations: any = null;

  constructor(
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.authService.getToken());
    this.isAuthenticated = this.authService.getToken() ? true : false;
    // this.router.navigate(['/home/admin']);
  }
}
