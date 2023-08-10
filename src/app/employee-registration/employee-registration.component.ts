import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { EmployeeCreationRequestDto } from '../model/employee-registration.model';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {


  empRegForm = this.fb.group(
    {
      firstName: [],
      lastName: [],
      fatherName: [],
      motherName: [],
      spouseName: [],
      gender: [],
      birthDate: [],
      anniversaryDate: [],
      isMarried: [],
    }
  );


  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService) {

  }

  onRegister() {
    const empCreReqDto: EmployeeCreationRequestDto = {
      firstName: this.empRegForm.value.firstName,
      lastName: this.empRegForm.value.lastName,
      gender: this.empRegForm.value.gender
    };

    this.employeeService.saveEmployee(empCreReqDto);
  }


}
