import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {TableComponent} from "./table/table.component";
import {OpdComponent} from "./opd/opd.component";
import {JusttableComponent} from "./justtable/justtable.component";

const routes: Routes = [

  { path: '', component: NavbarComponent },
  { path: 'table', component: TableComponent },
  { path: 'prescription', component: OpdComponent },
  { path: 'customer-add', component: CustomerAddComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'justtable', component: JusttableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
