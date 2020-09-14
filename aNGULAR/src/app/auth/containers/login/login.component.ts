import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = {
    message: '',
    isError: false,
    class: 'error-css',
    type: ''
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f(): any {
    return this.loginForm.controls;
  }

  login(): void {
    console.log(this.f);
    console.log('Message');
    if (
      !(this.f.username.status === 'VALID') &&
      !(this.f.password.status === 'VALID')
    ) {
      this.error = {
        message: 'Alle Felder müssen ausgefüllt werden',
        isError: true,
        class: 'error-css',
        type: 'REQUIRED'
      };
      return;
    }

    this.authService.login({
        username: this.f.username.value,
        password: this.f.password.value
      })
      .subscribe(success => {
        if (success) {
          this.initForm();
          this.router.navigate(['/home']);
        } else {
          this.initForm();
          this.error = {
            message: 'Accès non authorisé',
            isError: true,
            class: 'error-css',
            type: 'UNAUTHORIZE'
          };
        }
      });
  }

  openDashboard(): void {
    this.router.navigate(['/home']);
  }
}
