import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu = ['Snapshot', 'Sales', 'Reports', 'Users'];

  constructor(public authService: AuthService, private router: Router) {

    
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/snapshot'])
  }

  ngOnInit() {
  }

}
