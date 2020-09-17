import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportRoutingModule } from './support.routing.module';
import { IndexComponent } from './containers/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateComponent } from './containers/state/state.component';
import { AskComponent } from './containers/ask/ask.component';

@NgModule({
  declarations: [
    IndexComponent,
    StateComponent,
    AskComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SupportModule { }
