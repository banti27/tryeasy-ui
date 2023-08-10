import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeCreationRequest, EmployeeCreationRequestDto } from '../model/employee-registration.model';

const EMPLOYEE_BASE_URL = 'http://localhost:9000/api/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private httpClient: HttpClient) { }


  saveEmployee(employee: EmployeeCreationRequestDto) {


    const empCreReq: EmployeeCreationRequest = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      gender: employee.gender
    }

    this.httpClient
      .post(EMPLOYEE_BASE_URL, empCreReq)
      .subscribe(data => console.log(data));

  }


}
