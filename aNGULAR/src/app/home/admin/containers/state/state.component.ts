import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { EmployeeService } from 'src/app/home/employee/services/employee.service';

@Component({
  selector: 'app-admin-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  datas: any = [];
  constructor(
    private authService: AuthService,
    private dataService: EmployeeService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  submit(object): void {

    if ( !object.freigabeVort ) {
      alert('Veuillez selectionner la case avant de valider');
      return;
    }
    this.dataService.put(object)
      .then(success => {
        alert('Updated');
        console.log(success);
        this.fetchData();
      }).catch(error => {
          alert('Une erreur est survenue');
      });
  }

  fetchData(): void {
    this.dataService.gets().then(data => {
      console.log(data);
      this.datas = data;
    }).catch(error => {
      console.log(error);
    });
  }

  value(event): void {
    console.log(event);
  }

}
