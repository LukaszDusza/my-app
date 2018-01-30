import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  user: User;
  logInfo: String;

  constructor(private angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    });
  };

  login(email: string, password: string) {
    
    this.angularFire.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.router.navigate(['/home'])
        
        //  console.log(user);

      }).catch(err => {
        this.logInfo = err;
        console.log("LOGIN ERROR " + err);
      });

    console.log(email);
    // console.log(password);
  }

  signup(email: string, password: string) {

    // console.log(email);
    // console.log(password);

    this.angularFire.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log(value);
      }).catch(err => {
        this.logInfo = err;
        console.log("SIGN ERROR " + err);
      });
  };


  logout() {
    this.logInfo = null;
    this.angularFire.auth.signOut().then(() => {
      this.router.navigate(['/home'])
      console.log("user logout!");
    }).catch(err => {

      console.log("LOGOUT ERROR " + err);
    });

  }
}
