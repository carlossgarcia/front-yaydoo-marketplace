import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';
import { SellerDashComponent } from './pages/seller-dash/seller-dash.component';
import { BuyerDashComponent } from './pages/buyer-dash/buyer-dash.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin',
        component: AdminDashComponent
      },
      {
        path: 'seller',
        component: SellerDashComponent
      },
      {
        path: 'buyer',
        component: BuyerDashComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouting { }
