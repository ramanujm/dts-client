import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate() {

    if (this.authService.isUserLoggedIn()) {
      return true;
    } else {
      return this.router.navigateByUrl('/login');
    }
  }
}
