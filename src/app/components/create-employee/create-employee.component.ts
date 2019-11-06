import { EmployeeService } from './../../service/employee.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  Employee: any = [];

  constructor(private http: HttpClient, private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
    console.log('calling init in create employee....');
    this.reloadEmployees();
  }
  reloadEmployees() {
    this.getEmployee();
  }
  getEmployee() {
    this.empService.getAllEmployees().subscribe((data) => {
      console.log('getAllEmployees...', data);
      this.Employee = data;
    });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    console.log('emp before save service call...', this.Employee);
    this.empService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotolist();
  }
  gotolist() {
    this.router.navigate(['/employees']);
    this.reloadEmployees();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


}
