import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {AgmOverlays} from 'agm-overlays';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFsXG2DvWJp4waA4K4u286qEw6iVLmyIk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
