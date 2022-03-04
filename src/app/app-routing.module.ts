import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./admin/login-page/login-page.component";
import {ChangePasswordComponent} from "./admin/data-management/change-password/change-password.component";
import {DiscountTypesComponent} from "./admin/data-management/discount-types/discount-types.component";
import {ExpenseReportComponent} from "./admin/reports/expense-report/expense-report.component";
import {ExpenseTypesComponent} from "./admin/data-management/expense-types/expense-types.component";
import {ProductCategoryComponent} from "./admin/data-management/product-category/product-category.component";
import {ProductsComponent} from "./admin/data-management/products/products.component";
import {SubscriberCompanyComponent} from "./admin/data-management/subscriber-company/subscriber-company.component";
import {TablesComponent} from "./admin/data-management/tables/tables.component";
import {WorkerInfoComponent} from "./admin/data-management/worker-info/worker-info.component";
import {HomePageComponent} from "./admin/home-page/home-page.component";
import {PastReceiptsComponent} from "./admin/home-page/past-receipts/past-receipts.component";
import {ReceiptDetailComponent} from "./admin/home-page/receipt-detail/receipt-detail.component";
import {CategoryReportComponent} from "./admin/reports/category-report/category-report.component";
import {CompanySalesReportComponent} from "./admin/reports/company-sales-report/company-sales-report.component";
import {
  FavouriteProductReportComponent
} from "./admin/reports/favourite-product-report/favourite-product-report.component";
import {IncomeReportComponent} from "./admin/reports/income-report/income-report.component";
import {ReceiptDataReportComponent} from "./admin/reports/receipt-data-report/receipt-data-report.component";
import {WorkerManagementComponent} from "./admin/reports/worker-management/worker-management.component";
import {AdminMenuComponent} from "./admin/admin-menu/admin-menu.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'admin/data-management/change-password', component: ChangePasswordComponent},
  {path: 'admin/data-management/discount-types', component: DiscountTypesComponent},
  {path: 'admin/data-management/expense-types', component: ExpenseTypesComponent},
  {path: 'admin/data-management/product-category', component: ProductCategoryComponent},
  {path: 'admin/data-management/products', component: ProductsComponent},
  {path: 'admin/data-management/subscriber-company', component: SubscriberCompanyComponent},
  {path: 'admin/data-management/tables', component: TablesComponent},
  {path: 'admin/data-management/worker-info', component: WorkerInfoComponent},

  {path: 'home-page', component: HomePageComponent},
  {path: 'past-receipts', component: PastReceiptsComponent},
  {path: 'receipt-detail', component: ReceiptDetailComponent},

  {path: 'admin/reports/category-report', component: CategoryReportComponent},
  {path: 'admin/reports/company-sales-report', component: CompanySalesReportComponent},
  {path: 'admin/reports/expense-report', component: ExpenseReportComponent},
  {path: 'admin/reports/favourite-product-report', component: FavouriteProductReportComponent},
  {path: 'admin/reports/income-report', component: IncomeReportComponent},
  {path: 'admin/reports/receipt-data-report', component: ReceiptDataReportComponent},
  {path: 'admin/reports/worker-management', component: WorkerManagementComponent},

  {path: 'admin/admin-menu', component: AdminMenuComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
