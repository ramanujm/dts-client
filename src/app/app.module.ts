import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { EmployeeService } from './service/employee.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './core/material';
import { AuthguardService } from './service/authguard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './components/home/home.component';
import {DataTablesModule} from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFontAwesomeModule,
    DataTablesModule
  ],
  providers: [EmployeeService, AuthenticationService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
