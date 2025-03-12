import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { RouterModule } from '@angular/router';
import { ItemAddComponent } from './item/item-add/item-add.component';
import { ItemListComponent } from './item/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerListComponent,
    ItemAddComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
