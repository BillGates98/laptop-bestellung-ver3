import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from '../camunda-rest.service';
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

  constructor(private authService: AuthService, private camundaRestService: CamundaRestService, private router: Router) { }

  ngOnInit(): void {
    const route = {
      ITGruppe : 'admin',
      Mitarbeiter: 'admin', // 'employee',
      demo: 'support'
    };

    this.router.navigate(['/home/' + route[this.authService.getToken().userId]]);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
