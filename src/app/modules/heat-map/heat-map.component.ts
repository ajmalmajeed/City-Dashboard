import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {DisposalsModel} from '../../models/disposals.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent implements OnInit {

  disposalsCollection: AngularFirestoreCollection<DisposalsModel>;
  disposals: Observable<DisposalsModel[]>;

  latitude;
  longitude;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getCoordinates();
  }

  getCoordinates() {

    this.disposalsCollection = this.afs.collection('disposalData');

    this.disposals = this.disposalsCollection.valueChanges();
    console.log('BINS' + this.disposals);

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.latitude = a.payload.doc.data().coordinates.latitude;
        this.longitude = a.payload.doc.data().coordinates.longitude;
        // return {id: id, latitude: latitude, longitude: longitude};

      });

    });

  }

}
