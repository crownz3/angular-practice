import { AfterContentInit, Component, ContentChild, ViewChild } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements AfterContentInit{


  @ContentChild(EmployeesComponent) employeeComponent! : EmployeesComponent

  ngAfterContentInit(): void {
    console.log(this.employeeComponent)
  }
}
