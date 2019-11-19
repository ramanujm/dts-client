import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  isLoggedIn: boolean = true;
  constructor(private router: Router, public loginservice: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.loginservice.isUserLoggedIn();
  }

  showEmployees() {
    this.router.navigate(['/employees']);
  }

  addEmployee() {
    // this.router.navigateByUrl('/addEmployee');
    this.router.navigate(['/addEmployee']);
  }

  handleLogout() {
    console.log('logout clicked...');
    this.loginservice.logOut();
    this.router.navigate(['/login']);

  }

}
