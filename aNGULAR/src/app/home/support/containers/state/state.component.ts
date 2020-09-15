import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-support-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  datas: any = [{name: 'bill'}, {name: 'gate'}];
  constructor(
    private authService: AuthService,
    private dataService: AdminService,
    private router: Router) {
  }

  ngOnInit(): void {
    // this.router.navigate(['/home/employee/']);
    // this.fetchData();
  }

  fetchData(): void {
    this.dataService.getData().then(data => {
      console.log(data);
      this.datas = data;
    }).catch(error => {
      console.log(error);
    });
  }

}
