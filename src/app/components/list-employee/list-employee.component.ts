import { Employee } from './../../core/employee';
import { EmployeeService } from './../../service/employee.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  Employee: any = [];
  dtOptions: DataTables.Settings = {};

  constructor(private http: HttpClient, private empService: EmployeeService) { }

  ngOnInit() {
    this.reloadAllEmployees();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      data: this.Employee
    };
  }

  reloadAllEmployees() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.empService.getAllEmployees().subscribe((data) => {
      console.log('getAllEmployees===========>', data);
      this.Employee = data;
    });
  }

  removeEmployee(employee, index) {
    if (window.confirm('Are you sure to delete?')) {
        this.empService.deleteEmployee(employee.id).subscribe((data) => {
          this.Employee.splice(index, 1);
          // console.log('removeEmployee...', data);
          this.reloadAllEmployees();
        },
        error => console.log(error));

    }
  }

}
