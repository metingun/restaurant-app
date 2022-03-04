import {NgModule} from '@angular/core';

/*
import {ServiceInterceptor} from "./_service.interceptor";
*/

import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from "./admin/login-page/login-page.component";
import {FormsModule} from "@angular/forms";
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ApiModule} from "../swagger-api";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import { SubscriberCompanyComponent } from './admin/data-management/subscriber-company/subscriber-company.component';
import { TablesComponent } from './admin/data-management/tables/tables.component';
import { ProductCategoryComponent } from './admin/data-management/product-category/product-category.component';
import { ProductsComponent } from './admin/data-management/products/products.component';
import { DiscountTypesComponent } from './admin/data-management/discount-types/discount-types.component';
import { WorkerInfoComponent } from './admin/data-management/worker-info/worker-info.component';
import { ExpenseTypesComponent } from './admin/data-management/expense-types/expense-types.component';
import { ChangePasswordComponent } from './admin/data-management/change-password/change-password.component';
import { IncomeReportComponent } from './admin/reports/income-report/income-report.component';
import { ExpenseReportComponent } from './admin/reports/expense-report/expense-report.component';
import { WorkerManagementComponent } from './admin/reports/worker-management/worker-management.component';
import { CategoryReportComponent } from './admin/reports/category-report/category-report.component';
import { FavouriteProductReportComponent } from './admin/reports/favourite-product-report/favourite-product-report.component';
import { CompanySalesReportComponent } from './admin/reports/company-sales-report/company-sales-report.component';
import { ReadyOrderComponent } from './admin/home-page/ready-order/ready-order.component';
import { CashExpenseEntryComponent } from './admin/home-page/cash-expense-entry/cash-expense-entry.component';
import { PastReceiptsComponent } from './admin/home-page/past-receipts/past-receipts.component';
import {ReceiptDataReportComponent} from "./admin/reports/receipt-data-report/receipt-data-report.component";
import { HomePageTablesComponent } from './admin/home-page/home-page-tables/home-page-tables.component';
import { OrderMenuComponent } from './admin/home-page/order-menu/order-menu.component';
import { TableTransferComponent } from './admin/home-page/table-transfer/table-transfer.component';
import { ReceiptDetailComponent } from './admin/home-page/receipt-detail/receipt-detail.component';
import { DeleteOrderComponent } from './admin/home-page/receipt-detail/delete-order/delete-order.component';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SubscriberCompanyComponent,
    TablesComponent,
    ProductCategoryComponent,
    ProductsComponent,
    DiscountTypesComponent,
    WorkerInfoComponent,
    ExpenseTypesComponent,
    ChangePasswordComponent,
    IncomeReportComponent,
    ExpenseReportComponent,
    ReceiptDataReportComponent,
    WorkerManagementComponent,
    CategoryReportComponent,
    FavouriteProductReportComponent,
    CompanySalesReportComponent,
    ReadyOrderComponent,
    CashExpenseEntryComponent,
    PastReceiptsComponent,
    HomePageTablesComponent,
    OrderMenuComponent,
    TableTransferComponent,
    ReceiptDetailComponent,
    DeleteOrderComponent,
    HomePageComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ApiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
   /* {
    provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true
  }*/
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
