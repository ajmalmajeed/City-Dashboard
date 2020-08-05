import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { EkvaDisposalsModel } from '../../models/ekva-disposals.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ekva-mvp-one',
  templateUrl: './ekva-mvp-one.component.html',
  styleUrls: ['./ekva-mvp-one.component.scss']
})
export class EkvaMvpOneComponent implements OnInit {

  disposals = [];
  wins = [];
  binsCollection: AngularFirestoreCollection<EkvaDisposalsModel>;
  bins: Observable<EkvaDisposalsModel[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getWinners();
    this.getDisposals();
  }

  getWinners() {
    this.binsCollection = this.afs.collection('scanWinnings');
    this.bins = this.binsCollection.valueChanges();
    console.log('BINS' + this.bins);

    this.binsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        // @ts-ignore
        if (this.wins.indexOf(a.payload.doc.data().isActive) == false) {
          this.wins.push(a.payload.doc.data().claimedByUserId);
        }

      });

    });

  }

  getDisposals() {
    this.binsCollection = this.afs.collection('disposals');
    this.bins = this.binsCollection.valueChanges();
    console.log('BINS' + this.bins);

    this.binsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        // @ts-ignore
        if (this.disposals.indexOf(a.payload.doc.data().location) === -1) {
          this.disposals.push(a.payload.doc.data().location);
        }

      });

    });

  }

}
