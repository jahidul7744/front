import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customerRegister: FormGroup = new FormGroup({
    name: new FormControl('null'),
    email: new FormControl('null'),
    mobile: new FormControl('null'),
    dob: new FormControl('')
  });

  onRegisterUser(){
    debugger;
    const obj = this.customerRegister.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
