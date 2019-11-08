import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  baseUrl = 'http://localhost:8080/api/login';
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  username: string;
  password: string;

  constructor(private http: HttpClient) {

  }

  // authenticationService(username: string, password: string) {
  //   return this.http.get(`http://localhost:8080/api/v1/basicauth`,
  //     { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
  //       this.username = username;
  //       this.password = password;
  //       this.registerSuccessfulLogin(username, password);
  //     }));
  // }

  // createBasicAuthToken(username: string, password: string) {
  //   return 'Basic ' + window.btoa(username + ':' + password);
  // }

  // registerSuccessfulLogin(username, password) {
  //   sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  // }

  // logout() {
  //   sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  //   this.username = null;
  //   this.password = null;
  // }

  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  //   if (user === null) return false
  //   return true
  // }

  // getLoggedInUserName() {
  //   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  //   if (user === null) return ''
  //   return user
  // }

  authenticate(username, password) {
    if (username === 'ramanujm' && password === 'password') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    // console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
