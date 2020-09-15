import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  askForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dataService: EmployeeService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.askForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Begrundung: ['', Validators.required],
      Geratetyp: ['', Validators.required],
      Benutzername: ['', Validators.required],
    });
  }

  get f(): any {
    return this.askForm.controls;
  }

  isValidForm(form): boolean {
    const fields = ['FirstName', 'LastName', 'Begrundung', 'Geratetyp', 'Benutzername'];
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

}
