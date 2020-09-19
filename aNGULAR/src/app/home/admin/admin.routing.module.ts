import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './containers/index/index.component';
import { StateComponent } from './containers/state/state.component';
import { UserComponent } from './containers/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'state',
        component: StateComponent
      },
      {
        path: 'users',
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
