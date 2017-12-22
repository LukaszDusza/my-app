import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalesComponent } from './sales/sales.component';
import { ReportsComponent } from './reports/reports.component';
import { PiechartComponent } from './piechart/piechart.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SalesComponent,
    ReportsComponent,
    PiechartComponent,
    SnapshotComponent,
    UsersComponent,
    FooterComponent,
    FiltersComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
