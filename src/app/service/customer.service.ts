import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CustomerService {

  // private customerlist: any[]=[];



  constructor(private httpClient: HttpClient) { }

  private url:string="http://localhost:8080/api/v1/customers";


  public addCustomer(customer:any) :Observable<any> {
   return this.httpClient.post(`${this.url}/create`,customer, {responseType: 'text' as 'json'});
  }

  getCustomerList(page:number,size:number):Observable<any> {
    return this.httpClient.post<any>(`${this.url}/search-list`,{page,size});
  }


}
