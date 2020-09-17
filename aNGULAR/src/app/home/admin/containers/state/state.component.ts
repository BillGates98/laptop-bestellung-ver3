import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { EmployeeService } from 'src/app/home/employee/services/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  datas: any = [];
  laptops: any = [];
  user: any = null;

  askForm: FormGroup;
  token = null;
  active = null;
  fields = ['id', 'datumVort', 'kostenstelleVort', 'gerateTyp1Vort', 'preisVort', 'freigabeVort'];

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dataService: EmployeeService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.authService.getToken();
    this.initForm(this.secondInit({}, this.fields));
    this.fetchKundeChildren(this.user.id);
    this.fetchLaptops();
  }

  edit(data): void {
    this.active = data;
    this.initForm(data);
    // alert('Done');
    console.log(data);
  }

  secondInit(item, requireds): any {

    return {
        // 1
        email: [item.email],
        begrundung: [item.begrundung],
        gerateTyp0: [item.gerateTyp0],
        benutzerName: [item.benutzerName],

        id: [item.id],
        versanddatumExp: [item.versanddatumExp],
        hilfe: [item.hilfe],
        buchhaltungExp: [item.buchhaltungExp],
        vorNameVort: [item.vorNameVort],
        nachNameVort: [item.nachNameVort],
        rollenVort: [item.rollenVort],
        datumVort: [item.datumVort],
        gerateTyp1Vort: [item.gerateTyp1Vort],
        kostenstelleVort: [item.kostenstelleVort],
        preisVort: [item.preisVort],
        freigabeVort: [item.freigabeVort],
        usernameIt: [item.usernameIt],
        emailIt: [item.emailIt],
        bestellgrundIt: [item.bestellgrundIt],
        preisIt: [item.preisIt],
        bestellreferenzIt: [item.bestellreferenzIt],
        rechnungMitKostenstelleIt: [item.rechnungMitKostenstelleIt],
        abgabeBuchIt: [item.abgabeBuchIt]
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
    console.log( this.f);
    if (!this.isValidForm(this.f)) {
      alert('Formulaire invalide!');
      return;
    }
    this.dataService.put(this.active.id, this.buildData(this.f))
      .then(success => {
        if (this.f.freigabeVort) {
          this.sendMail(success);
        }
        this.fetchKundeChildren(this.user.id);
        alert('Updated');
      }).catch(error => {
          alert('Une erreur est survenue');
      });
  }

  fetchLaptops(): void {
    this.dataService.getLaptops().then(data => {
      console.log(data);
      this.laptops = data;
    }).catch(error => {
      console.log(error);
    });
  }

  fetchKundeChildren(parentId): void {
    this.dataService.getKundeFromParentId(parentId).then(data => {
      console.log(data);
      this.datas = data.reverse();
    }).catch(error => {
      console.log(error);
      alert('Error');
    });
  }

  sendMail(kunde): void {
    this.dataService.sendMail({
      email: kunde.email,
      object: 'Demandes!',
      content: 'Demande accepted!'
    }).then(data => {
        console.log(data);
        if (data.code === 'OK') {
          alert('Le mail a été envoyé à ' + kunde.benutzerName);
        }
    }).catch(error => {
      console.log(error);
      alert('Le mail n\'a pas pu être envoyé');
    });
  }

}
