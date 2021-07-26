import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SellerDashComponent } from './pages/seller-dash/seller-dash.component';
import { BuyerDashComponent } from './pages/buyer-dash/buyer-dash.component';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SellerDashComponent,
    BuyerDashComponent,
    AdminDashComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    HttpClientModule,
  ],
})
export class DashboardModule {}
