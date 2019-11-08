import { Employee } from './../../core/employee';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Employee: any = [];
employee: Employee = new Employee();
errorMessage = 'Invalid Credentials';
successMessage: string;
invalidLogin = false;
loginSuccess = false;

userName: string;
password: string;



  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  // handleLogin() {
  //   this.authService.authenticationService(this.username, this.password).subscribe((result) => {
  //     this.invalidLogin = false;
  //     this.loginSuccess = true;
  //     this.successMessage = 'Login Successful.';
  //     this.router.navigate(['/employees']);
  //   }, () => {
  //     this.invalidLogin = true;
  //     this.loginSuccess = false;
  //   });
  // }

  handleLogin() {
   // console.log(this.employee.userName + '...' + this.employee.password);
    if (this.authService.authenticate(this.employee.userName, this.employee.password )) {
        this.router.navigate(['/employees']);
        this.invalidLogin = false;
      } else {
        this.invalidLogin = true;
      }
    }
}
