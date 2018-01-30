import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
import { AuthGuardsService } from './auth/auth-guards.service';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { FiltersModule } from './filters/filters.module';
import { FooterModule } from './footer/footer.module';
import { SnapshotModule } from './snapshot/snapshot.module';
import { SalesModule } from './sales/sales.module';
import { ReportsModule } from './reports/reports.module';
import { LoginModule } from './auth/login/login.module';
import { PieChartModule } from './piechart/piechart.module';
import { NavbarModule } from './navbar/navbar.module';
import { PiechartComponent } from './piechart/index';
import { TestModule } from './test/test.module';



//fireBase config
const config = {
  apiKey: "AIzaSyAQyU-BzbJYO6ZhX-hMvqT9k5cUiulJav4",
  authDomain: "my-app-b9185.firebaseapp.com",
  databaseURL: "https://my-app-b9185.firebaseio.com",
  projectId: "my-app-b9185",
  storageBucket: "my-app-b9185.appspot.com",
  messagingSenderId: "244648256990"
};

@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    NavbarModule,
    PieChartModule,
    HomeModule,
    FiltersModule,
    UsersModule,
    FooterModule,
    SnapshotModule,
    SalesModule,
    ReportsModule,
    LoginModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    TestModule
  ],


  providers: [AuthService, AuthGuardsService],
  bootstrap: [AppComponent],


})

export class AppModule { }
