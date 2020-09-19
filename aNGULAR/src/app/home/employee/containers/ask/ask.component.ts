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
  taskId = null;
  token = null;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dataService: EmployeeService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.token = this.authService.getToken();
    console.log(this.token);
    this.initForm();
  }

  initForm(): void {

    this.askForm = this.formBuilder.group({
        // 1
        email: [this.token.email, Validators.required],
        begrundung: ['', Validators.required],
        gerateTyp0: ['', Validators.required],
        benutzerName: [this.token.username, Validators.required],

        id: [''],
        versanddatumExp: [''],
        hilfe: [''],
        buchhaltungExp: [''],
        vorNameVort: [this.token.vorname],
        nachNameVort: [this.token.nachname],
        rollenVort: [this.token.rollen],
        datumVort: [''],
        gerateTyp1Vort: [''],
        kostenstelleVort: [''],
        preisVort: [''],
        freigabeVort: [''],
        usernameIt: [this.token.username],
        emailIt: [''],
        bestellgrundIt: [''],
        preisIt: [''],
        bestellreferenzIt: [''],
        rechnungMitKostenstelleIt: [''],
        abgabeBuchIt: [''],
        ok: ['']
    });
  }

  get f(): any {
    return this.askForm.controls;
  }

  isValidForm(form): boolean {
    console.log(form);
    const fields = ['benutzerName', 'email', 'bestellgrundIt', 'gerateTyp0'];
    for (const f of fields) {
      if (form[f].status === 'INVALID') {
        return false;
      }
    }
    return true;
  }

  buildData(form): any {
    const object = {};
    for (const k in form) {
      if (k) {
        object[k] = form[k].value;
        if (k === 'freigabeVort' && form.gerateTyp0.value === 'Assistance') {
          object[k] = true;
        }
      }
    }
    return object;
  }

  submit(): void {
    // console.log(this.f);
    if ( !this.isValidForm(this.f) ) {
      alert('Veuillez remplir tout les champs');
      return;
    }
    this.dataService.post(this.buildData(this.f))
      .then(success => {
          alert('Envoyer');
          this.initForm();
          console.log(success);
      }).catch(error => {
          alert('Une erreur est survenue');
      });
  }

}
