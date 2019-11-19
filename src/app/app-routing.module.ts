import { HomeComponent } from './components/home/home.component';
import { AuthguardService } from './service/authguard.service';
import { LoginComponent } from './components/login/login.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'employees', component: ListEmployeeComponent, canActivate: [AuthguardService] },
  { path: 'addEmployee', component: CreateEmployeeComponent, canActivate: [AuthguardService]},
  { path: 'editEmployee/:id', component: UpdateEmployeeComponent, canActivate: [AuthguardService] },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
