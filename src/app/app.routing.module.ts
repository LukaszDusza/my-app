import {RouterModule, Routes} from '@angular/router';

import { NgModule } from '@angular/core';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { SalesComponent } from './sales/sales.component';


const appRoutes: Routes = [

// {
// path:'',
// redirectTo:'snapshot',
// pathMatch: 'full'
// },
  {
    path: 'snapshot',
    component: SnapshotComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'sales',
    component:SalesComponent
  },

  {
    path: 'users',
    component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}