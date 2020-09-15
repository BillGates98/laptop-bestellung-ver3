import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeGuard } from '../auth/guards/employee.guard';
import { AdminGuard } from '../auth/guards/admin.guard';
import { SupportGuard } from '../auth/guards/support.guard';


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
    },
    {
      path: 'support',
      loadChildren: () => import('./support/support.module').then(m => m.SupportModule),
      // canActivate: [PrivateGuard],
      canLoad: [SupportGuard]
    }
  ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
