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
    if (this.authService.getToken().parentid === 2) {
      this.router.navigate(['/home/employee']);
    } else if (this.authService.getToken().rollen === 'Vorgesetzt') {
      this.router.navigate(['/home/admin']);
    } else {
      this.router.navigate(['/home/support']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
