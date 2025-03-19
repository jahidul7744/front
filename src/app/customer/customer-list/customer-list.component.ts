import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList:any[]=[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.customerService.getCustomerList(1,1).subscribe(data=>{
      this.customerList = data.sort((a: { id:number }, b: { id:number }) => a.id-b.id);
    })
  }
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(data=>{
      this.getCustomer();
    })


  }

}
