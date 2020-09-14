import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeGuard } from '../auth/guards/employee.guard';
import { AdminGuard } from '../auth/guards/admin.guard';


const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    {
      path: 'employee',
      loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
      // canActivate: [PrivateGuard],
      canLoad: [EmployeeGuard]
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      // canActivate: [PrivateGuard],
      canLoad: [AdminGuard]
    }
  ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
