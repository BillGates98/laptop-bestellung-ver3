import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamundaRestService } from './camunda-rest.service';
import { LoginComponent } from './auth/containers/login/login.component';


@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    // SuiModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CamundaRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
