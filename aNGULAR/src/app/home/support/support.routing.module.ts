import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './containers/index/index.component';
import { InstallationComponent } from './containers/installation/installation.component';
import { AskComponent } from './containers/ask/ask.component';
import { StateComponent } from './containers/state/state.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'ask',
        component: AskComponent
      },
      {
        path: 'state',
        component: StateComponent
      },
      {
        path: 'installation',
        component: InstallationComponent
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
export class SupportRoutingModule { }
