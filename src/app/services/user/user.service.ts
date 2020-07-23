import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  save(user: firebase.User) {
    this.db
      .collection('dashboardUsers')
      .doc(user.uid)
      .update({
        name: user.displayName,
        email: user.email
      });
  }
}
