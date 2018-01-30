import {RouterModule, Routes} from '@angular/router';

import { NgModule } from '@angular/core';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardsService } from './auth/auth-guards.service';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [

{
path:'',
redirectTo:'home',
pathMatch: 'full',
},
{
  path: 'home',
  component: HomeComponent
},
  {
    path: 'snapshot',
    component: SnapshotComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'sales',
    component:SalesComponent,
    canActivate: [AuthGuardsService]
  },

  {
    path: 'users',
    component:UsersComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}