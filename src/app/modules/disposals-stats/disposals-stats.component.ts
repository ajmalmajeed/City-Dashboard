import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {DisposalsModel} from '../../models/disposals.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-disposals-stats',
  templateUrl: './disposals-stats.component.html',
  styleUrls: ['./disposals-stats.component.scss']
})
export class DisposalsStatsComponent implements OnInit {

  totalDisposals = 0;
  petBottlesCount = 0;
  milkPacketsCount = 0;
  juiceBoxesCount = 0;
  paperItemsCount = 0;
  tinCansCount = 0;
  cardBoardBoxesCount = 0;
  eWasteCount = 0;
  plasticItemsCount = 0;
  glassItemsCount = 0;
  flipFlopsCount = 0;

  petBottlesPercentage = '0';
  milkPacketsPercentage = '0';
  juiceBoxesPercentage = '0';
  paperItemsPercentage = '0';
  tinCansPercentage = '0';
  cardBoardBoxesPercentage = '0';
  eWastePercentage = '0';
  plasticItemsPercentage = '0';
  glassItemsPercentage = '0';
  flipFlopsPercentage = '0';

  disposalsCollection: AngularFirestoreCollection<DisposalsModel>;
  disposals: Observable<DisposalsModel[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getTotalDisposals();
    this.getPetBottles();
    this.getMilkPackets();
    this.getJuiceBoxesCount();
    this.getPaperItemsCount();
    this.getTinCansCount();
    this.getcardboardCount();
    this.getEwasteCount();
    this.getPlasticsItemsCount();
    this.getGlassItemsCount();
    this.getFlipFlopsCount();

  }

  getTotalDisposals() {

    this.disposalsCollection = this.afs.collection('disposals');

    this.disposals = this.disposalsCollection.valueChanges();
    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.totalDisposals += a.payload.doc.data().amount;

        console.log("DISPOSALS " + this.totalDisposals);

      });

    });

    return this.totalDisposals;
  }


  getPetBottles() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'petBottles');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.petBottlesCount += a.payload.doc.data().amount;

        const percentage = (this.petBottlesCount / this.getTotalDisposals()) * 100;
        this.petBottlesPercentage = percentage.toFixed(0);
      });

    });

  }

  getMilkPackets() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'milkPackets');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.milkPacketsCount += a.payload.doc.data().amount;

        const percentage = (this.milkPacketsCount / this.getTotalDisposals()) * 100;
        this.milkPacketsPercentage = percentage.toFixed(0);

      });

    });

  }

  getJuiceBoxesCount() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'juiceBoxes');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.juiceBoxesCount += a.payload.doc.data().amount;

        const percentage = (this.juiceBoxesCount / this.getTotalDisposals()) * 100;
        this.juiceBoxesPercentage = percentage.toFixed(0);

      });

    });

  }


  getPaperItemsCount() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'paperItems');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.paperItemsCount += a.payload.doc.data().amount;

        const percentage = (this.paperItemsCount / this.getTotalDisposals()) * 100;
        this.paperItemsPercentage = percentage.toFixed(0);

      });

    });

  }


  getTinCansCount() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'tinCans');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.tinCansCount += a.payload.doc.data().amount;

        const percentage = (this.tinCansCount / this.getTotalDisposals()) * 100;
        this.tinCansPercentage = percentage.toFixed(0);

      });

    });

  }


  getcardboardCount() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'cardboardBoxes');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.cardBoardBoxesCount += a.payload.doc.data().amount;

        const percentage = (this.cardBoardBoxesCount / this.getTotalDisposals()) * 100;
        this.cardBoardBoxesPercentage = percentage.toFixed(0);

      });

    });

  }


  getEwasteCount() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'eWasteItems');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.eWasteCount += a.payload.doc.data().amount;

        const percentage = (this.eWasteCount / this.getTotalDisposals()) * 100;
        this.eWastePercentage = percentage.toFixed(0);

      });

    });

  }


  getPlasticsItemsCount() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'plasticItems');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.juiceBoxesCount += a.payload.doc.data().amount;

        const percentage = (this.juiceBoxesCount / this.getTotalDisposals()) * 100;
        this.plasticItemsPercentage = percentage.toFixed(0);

      });

    });

  }


  getGlassItemsCount() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'glassItems');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.glassItemsCount += a.payload.doc.data().amount;

        const percentage = (this.glassItemsCount / this.getTotalDisposals()) * 100;
        this.glassItemsPercentage = percentage.toFixed(0);

      });

    });

  }


  getFlipFlopsCount() {

    this.disposalsCollection = this.afs.collection('disposals', ref => {
      return ref
        .where('garbageType', '==', 'flipFlops');
    });

    this.disposals = this.disposalsCollection.valueChanges();

    this.disposalsCollection.snapshotChanges().forEach(changes => {
      return changes.forEach(a => {
        const id = a.payload.doc.id;
        this.flipFlopsCount += a.payload.doc.data().amount;

        const percentage = (this.flipFlopsCount / this.getTotalDisposals()) * 100;
        this.flipFlopsPercentage = percentage.toFixed(0);

      });

    });

  }

}
