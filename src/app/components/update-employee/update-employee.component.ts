import { EmployeeService } from './../../service/employee.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private empService: EmployeeService ) { }
id: number;
employee: Employee;
submitted = false;
isEditable = true;

  ngOnInit() {
    this.submitted = false;
    this.employee = new Employee();
    this.id = this.route.snapshot.params.id;
    console.log('ID Value...', this.id);
    this.empService.getEmployee(this.id).subscribe(data => {
      console.log('Data ...', data);
      this.employee = data;
    }, error => console.log(error));
  }

  updateEmployee() {
    this.empService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

  handleChangePassword() {
    console.log('change pwd field enabled back...');
    this.isEditable = false;

  }

}
