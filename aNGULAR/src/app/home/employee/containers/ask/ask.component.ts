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
    this.initForm();
    this.getTaskId();
  }

  initForm(): void {
    this.askForm = this.formBuilder.group({
      email: ['', Validators.required],
      Begrundung: ['', Validators.required],
      Geratetyp: ['', Validators.required],
      Benutzername: ['', Validators.required],
    });
  }

  get f(): any {
    return this.askForm.controls;
  }

  getTaskId(): void {
    this.dataService.getTaskIdentification().then(data => {
      console.log(data);
      this.extractTaskId(data, this.token.userId);
    }).catch(error => {
      console.log(error);
    });
  }

  extractTaskId(data, userId): void {
    for (const task of data) {
      if (task.assignee === userId) {
        this.taskId = task.id;
      }
    }
    this.taskId = -1;
  }

  isValidForm(form): boolean {
    const fields = ['Benutzername', 'email', 'Begrundung', 'Geratetyp'];
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
        Benutzername: this.f.Benutzername.value,
        email: this.f.email.value,
        Geratetyp: this.f.Geratetyp.value,
        Begrundung: this.f.Begrundung.value,
      }, this.taskId)
      .then(success => {
          alert('Envoyer');
          console.log(success);
      }).catch(error => {
          alert('Une erreur est survenue');
      });
  }

}
