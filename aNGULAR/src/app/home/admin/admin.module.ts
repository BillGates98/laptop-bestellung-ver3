import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { IndexComponent } from './containers/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateComponent } from './containers/state/state.component';
import { UserComponent } from './containers/user/user.component';

@NgModule({
  declarations: [
    IndexComponent,
    StateComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
