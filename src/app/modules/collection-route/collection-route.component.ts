import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {BinModel} from '../../models/bin.model';
import {DisposalsModel} from '../../models/disposals.model';

@Component({
  selector: 'app-collection-route',
  templateUrl: './collection-route.component.html',
  styleUrls: ['./collection-route.component.scss']
})
export class CollectionRouteComponent implements OnInit {

  binsCollection: AngularFirestoreCollection<DisposalsModel>;
  bins: Observable<DisposalsModel[]>;
  uniqueLocations = [];

  latitude;
  longitude;

  origin = { lat: 6.893563, lng: 79.873324 };
  destination = { lat: 6.893563, lng: 79.873324 };

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getGeopointFirestore();
  }

  getGeopointFirestore() {

    // this.binsCollection = this.afs.collection('bins', ref => {
    //   return ref
    //     .where('isFull', '==', true);
    // });
    this.binsCollection = this.afs.collection('disposals');
    this.bins = this.binsCollection.valueChanges();
    console.log('BINS' + this.bins);

    this.binsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        if (this.uniqueLocations.indexOf(a.payload.doc.data().location) === -1) {
          this.uniqueLocations.push(a.payload.doc.data().location);
        }
        const id = a.payload.doc.id;
        this.latitude = a.payload.doc.data().coordinates.latitude;
        this.longitude = a.payload.doc.data().coordinates.longitude;
        // return {id: id, latitude: latitude, longitude: longitude};

      });

    });

  }

}
