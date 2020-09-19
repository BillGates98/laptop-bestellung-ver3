import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { MitarbeiterService } from '../../services/mitarbeiter.service';
import { EmployeeService } from 'src/app/home/employee/services/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  datas: any = [];
  admins: any = [];
  laptops: any = [];
  user: any = null;

  askForm: FormGroup;
  token = null;
  active = null;
  fields = [
    'username',
    'email',
    'vorname',
    'nachname',
    'vorgesetzer',
    'rollen',
    'password',
    'parentid'];

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dataService: MitarbeiterService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.authService.getToken();
    this.initForm(this.secondInit({}, this.fields));
    this.getUsers();
    this.getChildren();
  }

  edit(data): void {
    this.active = data;
    this.initForm(data);
    console.log(data);
  }

  reset(): void {
    this.initForm(this.secondInit({}, this.fields));
  }

  secondInit(item, requireds): any {

    return {
        id: [item.id],
        username: [item.username],
        email: [item.email],
        vorname: [item.vorname],
        nachname: [item.nachname],
        vorgesetzer: [this.user.username],
        rollen: [item.rollen],
        password: [item.password],
        parentid: [this.user.id]
    };
  }

  initForm(item): void {
    this.askForm = this.formBuilder.group(this.secondInit(item, this.fields));
  }

  get f(): any {
    return this.askForm.controls;
  }

  isValidForm(form): boolean {
    for (const f of this.fields) {
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
      }
    }
    return object;
  }

  submit(): void {
    if (!this.isValidForm(this.f)) {
      alert('Formulaire invalide!');
      return;
    }

    if (this.active !== null) {
      this.dataService.put(this.active.id, this.buildData(this.f))
      .then(data => {
        this.getChildren();
        alert('updated');
      }).catch(error => {
          alert('Une erreur est survenue');
      });
      this.active = null;
    } else {
      this.dataService.post(this.buildData(this.f))
        .then(data => {
          this.getChildren();
          alert('Created');
        }).catch(error => {
            alert('Une erreur est survenue');
        });
      }
  }

  getUsers(): void {
    this.dataService.getUserParents().then(data => {
      this.admins = data;
    }).catch(error => {
      console.log(error);
      alert('Error');
    });
  }

  getChildren(): void {
    this.dataService.getChildren(this.user.id).then(data => {
      this.datas = data.reverse();
      console.log(data);
    }).catch(error => {
      console.log(error);
      alert('Error');
    });
  }

}
