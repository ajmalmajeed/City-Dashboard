import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {BinModel} from '../../models/bin.model';

@Component({
  selector: 'app-collection-route',
  templateUrl: './collection-route.component.html',
  styleUrls: ['./collection-route.component.scss']
})
export class CollectionRouteComponent implements OnInit {

  binsCollection: AngularFirestoreCollection<BinModel>;
  bins: Observable<BinModel[]>;

  latitude;
  longitude;

  origin = { lat: 6.893563, lng: 79.873324 };
  destination = { lat: 6.893563, lng: 79.873324 };

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getGeopointFirestore();
  }

  getGeopointFirestore() {

    this.binsCollection = this.afs.collection('bins', ref => {
      return ref
        .where('isFull', '==', true)
    });

    this.bins = this.binsCollection.valueChanges();
    console.log('BINS' + this.bins)

    this.binsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.latitude = a.payload.doc.data().location.latitude;
        this.longitude = a.payload.doc.data().location.longitude;
        // return {id: id, latitude: latitude, longitude: longitude};

      })

    });

  }

}
