import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  datas: any = [];
  user = null;
  constructor(
    private authService: AuthService,
    private dataService: EmployeeService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.authService.getToken();
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getKundeForUser(this.user.email).then(data => {
      console.log(data);
      this.datas = data.reverse();
    }).catch(error => {
      console.log(error);
    });
  }

  confirmReception(data, value): void {
    data.ok = value;
    this.dataService.put(data.id, data)
      .then(success => {
        if (data.ok) {
          this.fetchData();
        }
        alert('Confirmer !');
      }).catch(error => {
          alert('Une erreur est survenue');
      });
  }

}
