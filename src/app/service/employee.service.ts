import { Employee } from './../core/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// tslint:disable-next-line:no-inferrable-types
baseUrl: string = 'http://localhost:8080/api';
headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Fetch all employee
  getAllEmployees() {
    return this.http.get(`${this.baseUrl}/getEmployeesList`);
}

// Create
createEmployee(data): Observable<any> {
  // let url = `${this.baseUrl}/createEmployee`;
  return this.http.post(`${this.baseUrl}/createEmployee`, data)
    .pipe(
      catchError(this.errorMgmt)
    );
}

// Get employee
getEmployee(id): Observable<any> {
  console.log('getEmployee # id => ', id);
  let url = `${this.baseUrl}/getEmployeeById/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: Response) => {
      return res || {};
    }),
    catchError(this.errorMgmt)
  );
}

// Update employee
updateEmployee(id, data): Observable<any> {
  let url = `${this.baseUrl}/update/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}

// Delete employee
deleteEmployee(id): Observable<any> {
  let url = `${this.baseUrl}/deleteEmployee/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}



 // Error handling
 errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}



}
