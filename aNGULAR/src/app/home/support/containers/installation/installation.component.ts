import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-support-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit {

  confirmForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dataService: AdminService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.confirmForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      Bestellgrund: ['', Validators.required],
      Bestellreferenz: ['', Validators.required],
      Preis: ['', Validators.required],
      software: ['', Validators.required]
    });
  }

  get f(): any {
    return this.confirmForm.controls;
  }

  isValidForm(form): boolean {
    const fields = ['username', 'Email', 'Bestellgrund', 'Bestellreferenz', 'software'];
    for (const f of fields) {
      if (form[f].status === 'INVALID') {
        return false;
      }
    }
    return true;
  }
  submit(): void {
    // console.log(this.f);
    if ( !this.isValidForm(this.f) ) {
      alert('Veuillez remplir tout les champs');
      return;
    }

    this.dataService.post({
        FirstName: this.f.FirstName.value,
        LastName: this.f.LastName.value,
        Begrundung: this.f.Begrundung.value,
        Geratetyp: this.f.Geratetyp.value,
        Benutzername: this.f.Benutzername.value,
      })
      .then(success => {
          console.log(success);
      }).catch(error => {
          alert('Une erreur est survenue');
      });
  }

  goBack(): void {
    window.history.back();
  }

}
