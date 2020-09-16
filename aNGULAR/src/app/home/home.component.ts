import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private fileToUpload: File = null;
  public SUCCESS = false;
  title = 'Hello';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const route = {
      ITGruppe : 'admin',
      Mitarbeiter: 'employee', // 'employee',
      demo: 'support'
    };

    if (this.authService.getToken().rollen.length > 0) {
      this.router.navigate(['/home/employee']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
