import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { RouterModule } from '@angular/router';
import { ItemAddComponent } from './item/item-add/item-add.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CustomerService} from "./service/customer.service";
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { OpdComponent } from './opd/opd.component';
import { JusttableComponent } from './justtable/justtable.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerListComponent,
    ItemAddComponent,
    ItemListComponent,
    NavbarComponent,
    TableComponent,
    OpdComponent,
    JusttableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
