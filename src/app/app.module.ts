import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalesComponent } from './sales/sales.component';
import { ReportsComponent } from './reports/reports.component';
import { PiechartComponent } from './piechart/piechart.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


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
    AppRoutingModule,
    Ng2GoogleChartsModule,
    ReactiveFormsModule,

    Ng4LoadingSpinnerModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
