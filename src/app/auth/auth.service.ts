import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase/app';

@Injectable()
export class AuthService {

  user: User;

  constructor(private angularFire: AngularFireAuth) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(email: string, password: string) {

    this.angularFire.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
      }).catch(err => {

        console.log("LOGIN ERROR " + err);
      });

    console.log(email);
    // console.log(password);
  }

  signup(email: string, password: string) {

    console.log(email);
    // console.log(password);

    this.angularFire.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log(value);
      }).catch(err => {
        console.log("SIGN ERROR " + err);
      });
  };


  logout() {

    this.angularFire.auth.signOut();

  }
}
