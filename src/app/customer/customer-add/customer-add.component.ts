import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customerRegister: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
  });

  customerList: any[] = [];


  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getCustomer();
  }

  submitForm(): void {
    this.customerService.addCustomer(this.customerRegister.value).subscribe(value => {
      console.log(value);
      this.getCustomer();
    })
  }

  getCustomer() {
    this.customerService.getCustomerList(1, 1).subscribe(data => {
      this.customerList = data.sort((a: { id:number }, b: { id:number }) => a.id-b.id);
    })
  }
}
